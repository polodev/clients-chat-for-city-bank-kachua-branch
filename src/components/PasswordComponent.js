import {Component} from 'react';
class PasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            staticPassword: 'hello',
            showChildren: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }
    componentDidMount() {
      const params = new URLSearchParams(window.location.search) // id=123
      let withpassword = params.get('withpassword') // 123

      if (withpassword) {
        this.setState({inputValue: withpassword});
      }

      if (withpassword && withpassword !== this.state.staticPassword ) {
        alert("password doesn't match");
      }
      if (withpassword && withpassword === this.state.staticPassword ) {
        this.setState({ showChildren: true });
      }

    }
    handleSubmit(event) {
        if(this.state.inputValue === this.state.staticPassword) {
            this.setState({ showChildren: true });
        }else {
            alert('nothing match');
        }
        event.preventDefault();
    }
    render() {
        console.log('inputValue', this.state.inputValue);
        return this.state.showChildren ? this.props.children :
            <div className="card mb-2">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="password">Secret</label>
                            <input value={this.state.inputValue} onChange={this.handleChange} type="password" autoFocus id="password" className="form-control"/>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
    }
}

export default PasswordComponent;

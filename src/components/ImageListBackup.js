import {Component} from 'react';
import { Slide, Zoom, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: 'rgb(239, 239, 239, 0.7)',
  color: 'red',
  fontSize: '25px',
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '95vh'
}
export default class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImages: [
        {url: '', caption: '1'},
      ],
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    const { cursor, result } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < result.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
  }
  render() {
    console.log(this.state)
    const slideProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true,
      autoplay: false,
      canSwipe: true,
    };

    return (
      <div className="slide-container">
        <Slide {...slideProperties}>
         {this.state.slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {slideImage.caption?<span style={spanStyle}>{slideImage.caption}</span>:"" }
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
  }
}

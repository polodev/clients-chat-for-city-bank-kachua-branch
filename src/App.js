import './App.css';
import PasswordComponent from './components/PasswordComponent'
import ImageSlide from './components/ImageSlide'

function App() {
  return (
    <div className="App">
      <div className="">
        <PasswordComponent>
          <ImageSlide/>
        </PasswordComponent>
      </div>
    </div>
  );
}

export default App;

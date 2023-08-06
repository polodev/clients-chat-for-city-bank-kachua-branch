import './App.css';
import PasswordComponent from './components/PasswordComponent'
import ImageSlide from './components/ImageSlide'
import ImageSlick from './components/ImageSlick'

function App() {
  return (
    <div className="App">
      <div className="">
        <PasswordComponent>
          {/*<ImageSlick />*/}
          <ImageSlide />
        </PasswordComponent>
      </div>
    </div>
  );
}

export default App;

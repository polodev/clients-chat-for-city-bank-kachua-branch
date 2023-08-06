import './App.css';
import PasswordComponent from './components/PasswordComponent'
import ImageSlide from './components/ImageSlide'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <PasswordComponent>
          <ImageSlide/>
        </PasswordComponent>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
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
  backgroundRepeat: 'no-repeat',
  height: '92vh',
  backgroundSize: 'contain',
}

const slideImages = [
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/1.png', caption: '1'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/2.png', caption: '2'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/3.png', caption: '3'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/4.png', caption: '4'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/5.png', caption: '5'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/6.png', caption: '6'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/7.png', caption: '7'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/8.png', caption: '8'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/9.png', caption: '9'},
    {url: 'https://raw.githubusercontent.com/devforking/khothin/main/chat/10.png', caption: '10'},
];

const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const slideProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: indicators,
  scale: 0.4,
  arrows: true,
  autoplay: false,
  canSwipe: true,
  slidesToShow: 1,
};
const ImageSlide = () => {
    return (
      <div className="slide-container">
        <Slide {...slideProperties}>
         {slideImages.map((slideImage, index)=> (
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
export default ImageSlide;
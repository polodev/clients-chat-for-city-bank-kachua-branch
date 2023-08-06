import React from "react";
import Slider from "react-slick";


export default function ImageSlick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     adaptiveHeight: true,
           swipeToSlide: true,
                 centerPadding: "60px",


  };
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

  return (
    <Slider {...settings}>
      {slideImages.map((slideImage, index)=> (
            <figure key={index}>
              <img src={slideImage.url} alt={slideImage.caption} />
              <figcaption>{slideImage.caption}</figcaption>
            </figure>
          ))} 
    </Slider>
  );
}
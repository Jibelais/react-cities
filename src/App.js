// IMPORT useState
//import React from 'react';
import React, {useState} from 'react'; 
import './styles.css';
import imagesArr from './imageData';

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr


export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img)

  

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick =(img) =>{
    setBigImage(img)
    console.log(img)

  }
  // console.log(setBigImage)
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const images = imagesArr.map((ele, index) => {
    
    // Bonus: Place a green border around the image to indicate that it is the current image being displayed
    
    //you can reduce the code you write with a ternary in your style property - see below

      return (
        <img
          className='thumb'
          src={ele.img}
          alt={ele.city}
          key={index}
          onClick={() => handleClick(ele.img)}
          style={{
            border: ele.img === bigImage ?  '4px solid green' : ''
          }} />
      )
    
  })
  
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key,  INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
            {images}
          {/* RENDER THE IMAGES ARRAY  */}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}

        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
    </div>
  );
}

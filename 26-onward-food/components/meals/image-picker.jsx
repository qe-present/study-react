'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div 
          className={classes.preview} 
          onClick={handlePickClick}
        >
          {!pickedImage && (
            <div className={classes.fallback}>
              <p>点击此处选择图片</p>
              <span className={classes.icon}>📷</span>
            </div>
          )}
          {pickedImage && (
            <Image 
              src={pickedImage} 
              alt="预览已选择的图片" 
              fill 
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
} 
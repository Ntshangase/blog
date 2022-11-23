import React from 'react'
import image1 from '../assets/Imagesuggestion/ASPARAGUS.jpg'
import image2 from '../assets/Imagesuggestion/CAKE.jpg'
import Image3 from '../assets/Imagesuggestion/CARROT.jpg';
import Image4 from '../assets/Imagesuggestion/FISH.jpg';
import Image5 from '../assets/Imagesuggestion/GARLIC.jpg';
import Image6 from '../assets/Imagesuggestion/ICE CREAM.jpg';
import Image7 from '../assets/Imagesuggestion/LEMON.jpg';
import Image8 from '../assets/Imagesuggestion/MEAT.jpg';
import Image9 from '../assets/Imagesuggestion/ORANGE.jpg';
import Image10 from '../assets/Imagesuggestion/PANCAKE.jpg';
import Image11 from '../assets/Imagesuggestion/PASTA.jpg';
import Image12 from '../assets/Imagesuggestion/PEPPER.jpg';
import Image13 from '../assets/Imagesuggestion/RICE 2.jpg';
import Image14 from '../assets/Imagesuggestion/RICE.jpg';
import Image15 from '../assets/Imagesuggestion/VEGIES.jpg';
import Image16 from '../assets/Imagesuggestion/SPINACH.jpg'


export default function Imagepage() {
  return (
    <div className="grid gap-x-2 gap-y-2 grid-cols-3 px-2 ">
        <img src={image1} alt='image1' />
        <img src={image2} alt='image2' />
        <img src={Image3} alt='Image3' />
        <img src={Image4} alt='Image4' />
        <img src={Image5} alt='Image5' />
        <img src={Image6} alt='Image6' />
        <img src={Image7} alt='Image7' />
        <img src={Image8} alt='Image8' />
        <img src={Image9} alt='Image9' />
        <img src={Image10} alt='Image10' />
        <img src={Image11} alt='Image11' />
        <img src={Image12} alt='Image12' />
        <img src={Image13} alt='Image13' />
        <img src={Image14} alt='Image14' />
        <img src={Image15} alt='Image15' />
        <img src={Image16} alt='Image16' />
    </div>
  )
}

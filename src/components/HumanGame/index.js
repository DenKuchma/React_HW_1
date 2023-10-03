// import React, { useState, useEffect } from 'react';
// import styles from './Human.module.css'
// import { animals } from '../../utils/mainConst';
// import { secretWord, guessedWord, incorrectGuesses } from '../../utils/mainLet';



// export const Game = () => {

//     const createHumanBody = (classlist, parent = document.body, tag = 'div') => {
//       const node = document.createElement(tag);
//       if (classlist instanceof Array) {
//           node.classList.add(...classlist); 
//       } else{
//           node.classList.add(...classlist.split(' '));
//       }
//       parent.appendChild(node);
//     }
//     const createHumanImage = (imageSrc, parent = document.body) => {
//       const img = document.createElement('img');
//       img.src = imageSrc;
//       img.classList.add('img-result')
//       parent.appendChild(img);
//     }
//     // const getElemFromHTML = (element) => document.querySelector(element);
//     // console.log(getElemFromHTML('#word-display'))
//     useEffect(() => {
//       const getElemFromHTML = (element) => document.querySelector(element);
//       console.log(getElemFromHTML('#word-display'));
//     }, []);

//     return (
//       <></>
//     );
// }
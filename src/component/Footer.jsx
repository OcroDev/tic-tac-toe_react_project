import React from 'react';
import './Footer.css';
import react  from '../assets/react.svg'
import javascript from '../assets/javascript_logo.png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <h5>
         React &nbsp;<img src={react} alt='React logo'/>&nbsp;+&nbsp;<img src={javascript} alt="TypeScript logo" /> &nbsp;
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h5>
      <h6>&nbsp;Tic-Tac-Toe utilizando solo el hook &nbsp;<b style={{ color: '#07f' }} >"useState()"</b> </h6>
    </footer>
  );
};

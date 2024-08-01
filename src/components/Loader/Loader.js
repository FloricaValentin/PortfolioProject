import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Animation.json'
import './Loader.css';

const Loader = () => {
  return (
    <div className="lottie-loader">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '150px', height: '150px' }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer__block">
      <p className="footer__text">Copyright &#169; {currentYear}</p>
    </div>
  )
}

export default Footer
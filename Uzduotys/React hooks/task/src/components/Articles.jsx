import React, { useState } from 'react';
import Modal from './Modal';

const Articles = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMarked, setIsMarked] = useState(article.isMarked);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMark = () => {
    setIsMarked(!isMarked);
  };

  return (
    <>
      <div className="article-summary">
        <img src={article.photo} alt={article.title} />
        <h2>{article.title}</h2>
        <label className="switch">
          <input type="checkbox" checked={isMarked} onChange={handleMark} />
          <span className="slider"></span>
        </label>
        <button onClick={handleOpen}>More Details</button>
      </div>
      {isOpen && (
        <Modal onClose={handleClose}>
          <h2>{article.title}</h2>
          <img src={article.photo} alt={article.title} />
          <p>{article.paragraph1}</p>
          <p>{article.paragraph2}</p>
          <p>{article.paragraph3}</p>
        </Modal>
      )}
    </>
  );
};

export default Articles;

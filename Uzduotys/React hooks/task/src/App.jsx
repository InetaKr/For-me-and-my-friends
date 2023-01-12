import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Articles from './components/Articles';

const App = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      key: 'article1',
      isMarked: false,
      title: 'Article 1',
      photo: 'article1.jpg',
      paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      paragraph2: 'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
      paragraph3: 'Nam congue risus eget magna accumsan, euismod euismod risus.'
    },
    // more articles here
  ]);
  const [markedArticles ] = useState(0);

  
  const handleMark = (id) => {
    setArticles(prevArticles => prevArticles.map(article => {
      if (article.id === id) {
        article.isMarked = !article.isMarked;
      }
      return article;
    }));
  };

  return (
    <div className="app">
      <NavBar markedArticles={markedArticles} />
      <div className="articles">
        {articles.map((article) => (
          <Articles
            key={article.key}
            article={article}
            onMark={handleMark}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Article from './components/Articles';

const App = () => {
  // State to keep track of the number of marked articles
  const [markedArticles, setMarkedArticles] = useState(0);

  // State to keep track of the articles
  const [articles, setArticles] = useState([
    {
      id: 1,
      key: 'article1',
      status: 'unmarked',
      title: 'All the fish',
      photo: 'https://media.istockphoto.com/id/156239152/photo/man-eating-whole-raw-fish.jpg?s=612x612&w=0&k=20&c=DdiLvPyyi94NdTXyAt8wwtAFXxp9BWA0eWXXwZKAX84=',
      paragraphs: [
         ' I went to this girls party the week after she beat the shit out of my friend. While everyone was getting trashed, I went around putting tuna inside all the curtain rods ',
         'so like weeks went by and they couldnt figure out why the house smelled like festering death.',
         'https://thoughtcatalog.com/january-nelson/2018/06/funny-stories/#:~:text=They%20caught%20me%20through%20this%20video%20where%20these%20guys%20at%20the%20party%20were%20singing%20Beyonc%C3%A9%20while%20I%20was%20in%20the%20background%20with%20a%20can%20of%20tuna.'
      ]  
    },
    {
      id: 2,
      key: 'article2',
      status: 'unmarked',
      title: 'Lotion boy',
      photo: 'https://i.imgflip.com/f74g2.jpg',
      paragraphs: [
         'One time in my chemistry class, while the teacher was talking, this guy asked loudly, “Does anyone have any lotion?” The teacher stopped talking as some girl gave him some hand lotion.The guy proceeds to slowly rub the lotion on his face as the whole class watches him in confusion.',
         'The teacher asks him what hes doing, and he responds with “I forgot to moisturize this morning” and puts even more on his face.',
         'The teacher asks him to go to the hall to finish his moisturizing because hes being a distraction, and after about 10 minutes he still hasnt come back in, so someone opens the door to check and he’s still smearing lotion all over his face. He finally comes back in and hands the girl her lotion, and hes used up half of it. Now people call him lotion boy.'
      ]  
    },
    {
      id: 3,
      key: 'article3',
      status: 'unmarked',
      title: 'Article 3',
      photo: 'article1.jpg',
      paragraphs: [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
         'Nam congue risus eget magna accumsan, euismod euismod risus'
      ]  
    },
    {
      id: 4,
      key: 'article4',
      status: 'unmarked',
      title: 'Article 4',
      photo: 'article1.jpg',
      paragraphs: [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
         'Nam congue risus eget magna accumsan, euismod euismod risus'
      ]  
    },
    {
      id: 5,
      key: 'article5',
      status: 'unmarked',
      title: 'Article 5',
      photo: 'article1.jpg',
      paragraphs: [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
         'Nam congue risus eget magna accumsan, euismod euismod risus'
      ]  
    },
    {
      id: 6,
      key: 'article6',
      status: 'unmarked',
      title: 'Article 6',
      photo: 'article1.jpg',
      paragraphs: [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
         'Nam congue risus eget magna accumsan, euismod euismod risus'
      ]  
    },
    {
      id: 7,
      key: 'article7',
      status: 'unmarked',
      title: 'Article 7',
      photo: 'article1.jpg',
      paragraphs: [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Sed auctor, magna eu bibendum vestibulum, ex metus malesuada velit.',
         'Nam congue risus eget magna accumsan, euismod euismod risus'
      ]
    },
    // Add more articles here...
  ]);

  // Effect to update the number of marked articles in the NavBar
  useEffect(() => {
    const marked = articles.filter(article => article.status === 'marked').length;
    setMarkedArticles(marked);
  }, [articles]);

  // Function to handle marking/unmarking of an article
  const handleMark = id => {
    const updatedArticles = articles.map(article => {
      if (article.id === id) {
        return {
          ...article,
          status: article.status === 'marked' ? 'unmarked' : 'marked'
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  return (
    <div>
      <NavBar markedArticles={markedArticles} />
      <div className="articles">
        {articles.map(article => (
          <Article key={article.id} article={article} handleMark={handleMark} />
        ))}
      </div>
    </div>
  );
};

export default App;










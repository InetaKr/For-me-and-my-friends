import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Article from './components/Articles';
import "./App.css";

const App = () => {
  // State  kuris ziures kiek yra straipnius marked 
  const [markedArticles, setMarkedArticles] = useState(0);// naudojamas useState hook sukurit a state variable ir funkcijai kuri updatintu 


  // State kuris ziures strapsnius  ju data
  const [articles, setArticles] = useState([
    {
      id: 1,
      status: 'unmarked',
      title: 'All the fish',
      photo: 'https://media.istockphoto.com/id/156239152/photo/man-eating-whole-raw-fish.jpg?s=612x612&w=0&k=20&c=DdiLvPyyi94NdTXyAt8wwtAFXxp9BWA0eWXXwZKAX84=',
      paragraphs: [
         ' I went to this girls party the week after she beat the shit out of my friend. While everyone was getting trashed, I went around putting tuna inside all the curtain rods ',
         'so like weeks went by and they couldnt figure out why the house smelled like festering death.',
         'They caught me through this video where these guys at the party were singing Beyoncé while I was in the background with a can of tuna.'
      ]  
    },
    {
      id: 2,
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
      status: 'unmarked',
      title: 'My favorite teacher',
      photo: 'http://joeforsyth.com/wp-content/uploads/2016/06/teacher_holding_book_and_laughing.jpg',
      paragraphs: [
         ' One time in 6th grade we were at recess and while I was running to my friends, I just so happened to kick a HUGE rock (keep in mind, I was wearing flip-flops so it hurt like hell) and without thinking, I shouted at the top of my lungs',
         '“MOTHERFUCKER!” And with my god-awful luck, my math teacher was sitting at the bench right BESIDE ME.',
         'He then took me inside to what I thought was yell at me but he just couldnt stop laughing and sent me back outside with a literal candy bar. He is still my favorite teacher I have ever had.'
      ]  
    },
    {
      id: 4,
      status: 'unmarked',
      title: 'Skull lover',
      photo: 'https://cdn.fansshare.com/photo/josephmorgan/joseph-morgan-as-klaus-sitting-on-chair-holding-skull-desktop-wallpapers-joseph-morgan-1332098466.jpg',
      paragraphs: [
         'So I was sitting at a lecture when I feel like being stared at, and in the corner of my eye I see this really handsome guy, whos literally just staring at me. I dont think much of it and continue to listen to the professor.',
         'After the lecture the guy comes up to me, and lays his hand on head and Im like “eeeehm, what are you doing” and he stares me dead in the eyes and says',
         '“Ive never seen such a gorgeous skull” and then he turns around and leaves.'
      ]  
    },
    {
      id: 5,
      status: 'unmarked',
      title: 'A full sun',
      photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg',
      paragraphs: [
         'After an exhausting, weeklong festival I was getting a lift back home in a car full of my friends. We were coming up over a mountain road with a really beautiful ocean view just at sunset.',
         'Ill never forget the outburst that followed when I said “wow its so beautiful, and its even a full sun!”',
         'I momentarily forgot that only moons have phases, and that the sun is generally always "full" … my friends have never let me live it down.'
      ]  
    },
    {
      id: 6,
      status: 'unmarked',
      title: ' Foreign student trauma',
      photo: 'https://i0.wp.com/defendernetwork.com/wp-content/uploads/2022/11/GettyImages-482146883-scaled.jpg?fit=1200%2C835&ssl=1',
      paragraphs: [
         'When I first moved from Lithuania to America I was 5 years old and didnt speak any English. On the first day of kindergarten I was crying so much that my teacher picked me up and let me sit on her lap',
         'meanwhile the rest of the kids sat on the carpet in front of me and watched me cry while she explained to them what was going on (in a language I didnt understand). Our school was 3 buildings put together, and the pick up was at the “blue” building but my classroom was at the “red” building',
         'so they put a sign over my neck that said “I dont speak English and Im going to the blue building” and sent me away to follow a crowd of other kids. Im still traumatized…'
      ]  
    },
    {
      id: 7,
      status: 'unmarked',
      title: 'That one time I got lost',
      photo: 'https://i.ytimg.com/vi/1wZhvyva1BA/maxresdefault.jpg',
      paragraphs: [
         'So about a year ago, I was in Phys. Ed class, and we went around the neighborhood for a jog at the beginning of each class. I hadnt done it before because of medical reasons, but the teacher evidently forgot about it. ',
         ' Im incredibly bad with directions and easily distracted, so I lost sight of the rest of the group and went completely the wrong way. ',
         'I ended up being lost for TWO AND A HALF HOURS. the best part is that I single handedly changed my schools Phys. Ed policy.'
      ]
    },
    
  ]);

  // Effecto hookas kuris vis updatins skaiciu pazymetu strapsnius Navbare 
  useEffect(() => {
    const marked = articles.filter(article => article.status === 'marked').length;
    setMarkedArticles(marked);
  }, [articles]);

  //handleris kuris priziures marked/unmarked straipsniu statusa
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

//Kiekvieną kartą pažymėjus straipsnį, iškviečiama funkcija „markArticles“, 
//kuri padidina pažymėtų straipsnių būseną vienu, o kai straipsnis nepažymėtas, iškviečiama funkcija unmarkArticle, 
//kuri sumažina pažymėtų straipsnių būseną vienu. 
// „markedArticle“ ir „unmarkArticle“ veikia kaip propsai.








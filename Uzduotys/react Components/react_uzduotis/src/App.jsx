import './App.css';
import Portfolio from './components/portfolio';
import Cards from './components/cards';
import Header from './components/header';

function App() {
  return (
    <main>
      <header id='header'>
        <Header />
      </header>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id="cardWrapper">
          <Cards
            data={
              [
                {
                  image: 'http://wallpaperstock.net/black-and-white-coffee-cup_wallpapers_35220_2560x1600.jpg',
                  text: 'Cup For You'
                },
                {
                  image: 'https://www.homegrounds.co/wp-content/uploads/2022/02/Automatic-drip-coffee-maker-and-coffee.jpeg',
                  text: 'Black All The Way'
                },
                {
                  image: 'https://imgix.bustle.com/uploads/image/2018/12/26/1c7d6022-5a86-48c3-a17f-909dab8b98b7-lava-cake-red-cup.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
                  text: 'Red Cup Sweet Coffee'
                },
                {
                  image: 'https://i.pinimg.com/564x/45/fd/97/45fd970a5b67e16d0cc62888c9b47790--coffee-meme-funny-coffee.jpg',
                  text: 'Decaf Coffee Is Evil'
                },
                {
                  image: 'https://i.imgur.com/OeZSgUK.jpeg',
                  text: 'Drink Coffee and Go Do Some Work'
                },
                {
                  image: 'https://www.liveabout.com/thmb/TWb2uPnzJCVzWl8Zz0vAp2Hm73k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/allworkandnocoffee-5aa1a78ac673350037a21b30.PNG',
                  text: 'No Coffee No Life'
                }
              ]
            }
          />
      </section>
    </main>

  );
}

export default App;


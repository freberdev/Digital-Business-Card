import { Header } from "./components/Header";
import { About } from "./components/About";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";
import "./cssFiles/All.css";


function App() {

  return (
    <div className="App">
      
      <Header 
      name="Fredrik Bergqvist" 
      title="C#.NET Full Stack Dev." 
      url="https://freber.dev" 
      siteName="www.freber.dev"
      email="contact@freber.dev"
      />

      <About>
        I am a junior C#.NET full stack developer with a particular interest in
        backend. On AW Academy where i did my studies we learned the following:
        <li>C#</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>MySQL</li>
        <li>MVC</li>
        <br />
        We also had plenty of SCRUM theory, how to use Git and a couple of days
        with UX/UI theory.
      </About>

      <Interests>
        My biggest interest is my family. I've got two awesome kids and a
        beautiful wife. On top of that I'm a nerd, i said it my self. I grew up
        behind a screen and it's still my biggest interest. I've been coding
        some in my young days but only learned the shortcuts to fix what I was
        doing at the time. I'm also a gamer. Mostly FPS games like
        Counter-Strike and Valorant and I still do some gaming from time to
        time. Another big interest of mine is bitcoin.
      </Interests>

      <Footer 
      twitter="https://twitter.com/freberdev"
      github="https://github.com/freberdev"
      linkedin="https://www.linkedin.com/in/fredrikbergqvist/"
      />
           
    </div>
  );
}

export default App;

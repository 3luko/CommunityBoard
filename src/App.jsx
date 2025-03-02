import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="dumbell-images">
        <img className="first-dumbell" src="/images/dumbell.jpg"></img>
        <img className="second-dumbell" src="/images/dumbell2.jpg"></img>
        <img className="bench-press" src="/images/benchpress.jpg"></img>
      </div>

      {/* <img className='dumbell-image' src='/images/dumbell.jpg'></img>  */}
      <div className="cards-container">
        <Cards
          imgsrc="/images/anytimefitness.webp"
          title="Anytime Fitness St. Paul"
          imgAlt="Anytime Fitness Card"
          link="https://www.anytimefitness.com/gyms/3989/st-paul-mn-55116/?utm_source=google&utm_medium=organic-businesslisting&utm_campaign=gbp-listing&utm_content=3989"
        />

        <Cards
          imgsrc="/images/northloop.jpg"
          title="North loop Fitness"
          imgAlt="North Loop Fitness"
          link="https://www.northloopfitness.com/"
        />

        <Cards
          imgsrc="/images/northeast.jpg"
          title="Northeast Fitness"
          link="http://ne.fitness/"
          imgAlt="Northeast Fitness Card"
        />

        <Cards
          title="Train your way"
          link="http://www.trainyourwayfitness.com/"
          imgsrc="/images/trainyourway.jpg"
          imgAlt="Train your way Card"
        />

        <Cards
          title="Los Campeones"
          link="http://www.loscampeonesgym.com/"
          imgsrc="/images/loscampeones.jpg"
          imgAlt="los campeones card"
        />

        <Cards
          title="Studio ME Fitness"
          link="http://studiomefitness.com/"
          imgsrc="/images/studiomefitness.png"
          imgAlt="Studio ME Fitness Card"
        />

        <Cards
          title="Solcana Fitness"
          link="http://www.solcanafitness.com/"
          imgsrc="/images/solcana.jpg"
          imgAlt="Solcana Fitness"
        />

        <Cards
          title="The Grind Fitness"
          link="https://www.thegrindmpls.com/"
          imgsrc="/images/TheGrindMPLS.jpg"
          imgAlt="The Grind Card"
        />

        <Cards
          title="Hardshell Fitness LLC"
          link="http://www.hardshellfit.com/"
          imgsrc="/images/hardshell.jpg"
          imgAlt="Hardshell Card"
        />

        <Cards
          title="Twin Town Fitness"
          link="http://www.twintownfitness.com/"
          imgsrc="/images/twintown.jpeg"
          imgAlt="Twin Town Card"
        />
      </div>
    </div>
  );
};

export default App;

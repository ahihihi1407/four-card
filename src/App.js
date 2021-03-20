import './App.css';
import Card from './Component/Card'

const cardInfo = [
  {
    box: "box box-supervisor box-change",
    header: "Supervisor",
    content: "Monitors activity to identify project roadblocks"
  },
  {
    box: "box box-team-builder",
    header: "Team Builder",
    content: "Scans our talent network to create the optimal team for your project",
    image: './images/icon-team-builder.svg'
  },
  {
    box: "box box-calculator box-change",
    header: "Calculator",
    content: "Uses data from past projects to provide better delivery estimates",
    image: './images/icon-calculator.svg'
  },
  {
    box: "box box-karma",
    header: "Karma",
    content: "Regularly evaluates our talent to ensure quality",
    image: './images/icon-karma.svg'
  },
]

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Reliable, efficient delivery <br />
          <span>Powered by Technology</span>
        </h1>
        <p>Our Artificial Intelligence powered tools use millions of project data <br /> points
        to ensure that your project is successful
        </p>
      </div>
      <div className="card-container">
        <Card info={cardInfo[0]} />
        <Card info={cardInfo[1]} />
        <Card info={cardInfo[2]} />
        <Card info={cardInfo[3]} />
      </div>
    </div>
  );
}

export default App;

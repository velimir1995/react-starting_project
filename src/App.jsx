import imgReact from './assets/react-core-concepts.png';
import imgComponents from './assets/components.png';

const reactDescriptions = ["Core", "Fundamental", "Crucial"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(prompts) {
  return (
    <li>
      <img src={prompts.img} alt={prompts.title} />
      <h3>{prompts.title}</h3>
      <p>{prompts.description}</p>
    </li>
  )
}

function Header() {
  return (
    <header>
      <img src={imgReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              img={imgComponents}
              description="Core UI building block."
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

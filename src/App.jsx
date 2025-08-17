import { useState } from 'react'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTab, setSelectedTab] = useState('components');

  function handleClick(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => { handleClick('components') }}>Components</TabButton>
            <TabButton onClick={() => { handleClick('jsx') }}>JSX</TabButton>
            <TabButton onClick={() => { handleClick('props') }}>Props</TabButton>
            <TabButton onClick={() => { handleClick('state') }}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTab].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

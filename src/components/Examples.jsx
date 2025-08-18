import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState(null);

  function handleClick(selectedButton) {
    setSelectedTab(selectedButton);
  }

  let tabContent = <p>Please select a tab to view the example code.</p>;

  if (selectedTab) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTab].code}
        </code>
      </pre>
    </div>
  }

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTab === 'components'}onClick={() => { handleClick('components') }}>Components</TabButton>
        <TabButton isSelected={selectedTab === 'jsx'}onClick={() => { handleClick('jsx') }}>JSX</TabButton>
        <TabButton isSelected={selectedTab === 'props'}onClick={() => { handleClick('props') }}>Props</TabButton>
        <TabButton isSelected={selectedTab === 'state'}onClick={() => { handleClick('state') }}>State</TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

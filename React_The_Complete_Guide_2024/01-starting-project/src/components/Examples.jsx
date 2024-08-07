import { useState } from "react";
import { EXAMPLES } from "../data";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  // Handle tab content info
  const [selectedTopic, useSelectedTopic] = useState(); //Please click a button");

  //On click event
  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    useSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={selectedTopic === "Components"}
              onClick={() => handleSelect("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "JSX"}
              onClick={() => handleSelect("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Props"}
              onClick={() => handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "State"}
              onClick={() => handleSelect("State")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

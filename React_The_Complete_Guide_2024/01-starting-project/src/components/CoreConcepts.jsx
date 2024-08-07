import CoreConcept from "./CoreConcept"
import Section from "./Section";

import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <Section title="Core concepts" id="core-concepts">
      <ul>
        {/*CORE_CONCEPTS.map((conceptItem) => {
        return (
          <CoreConcept
            title={conceptItem.title}
            description={conceptItem.description}
            image={conceptItem.image}
          />
        );
      })*/}
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
        {/*
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} />
      */}
      </ul>
    </Section>
  );
}

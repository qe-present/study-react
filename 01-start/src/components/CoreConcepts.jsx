import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts">
            <h2>core concepts</h2>
            <ul>
                {
                    CORE_CONCEPTS.map((ConceptItem) =>
                        <CoreConcept
                            key={ConceptItem.title}
                            {...ConceptItem}
                        />
                    )

                }
            </ul>
        </Section>
    )
}

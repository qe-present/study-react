import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    let [selected, setSelected] = useState();
    const onSelect = (name) => {
        setSelected(name);
    }
    let tabContent = <p>Please select a topic from the menu above.</p>
    if(selected){
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selected].title}</h3>
                <p>{EXAMPLES[selected].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selected].code}
                    </code>
                </pre>
            </div>
        )
    }
    return (
        <Section title="examples" id="examples">
            <Tabs
                buttons={
                <>
                    <TabButton
                        isActive={selected === 'components'}
                        onClick={() => onSelect('components')}>Components</TabButton>
                    <TabButton
                        isActive={selected === 'jsx'}
                        onClick={() => onSelect('jsx')}>JSX</TabButton>
                    <TabButton
                        isActive={selected === 'props'}
                        onClick={() => onSelect('props')}>props</TabButton>
                    <TabButton
                        isActive={selected === 'state'}
                        onClick={() => onSelect('state')}>state</TabButton>
                </>
                }
            >
                {tabContent}
            </Tabs>

            {/*//  1*/}
            {/*{!selected? <p>Please select a topic from the menu above.</p> :(*/}
            {/*<div id="tab-content">*/}

            {/*    <h3>{EXAMPLES[selected].title}</h3>*/}
            {/*    <p>{EXAMPLES[selected].description}</p>*/}
            {/*    <pre>*/}
            {/*        <code>*/}
            {/*            {EXAMPLES[selected].code}*/}
            {/*        </code>*/}
            {/*    </pre>*/}
            {/*</div>)*/}
            {/*}*/}


            {/*//  2*/}
            {/*{!selected&&<p>Please select a topic from the menu above.</p>}*/}
            {/*{selected && (*/}
            {/*    <div id="tab-content">*/}

            {/*        <h3>{EXAMPLES[selected].title}</h3>*/}
            {/*        <p>{EXAMPLES[selected].description}</p>*/}
            {/*        <pre>*/}
            {/*        <code>*/}
            {/*            {EXAMPLES[selected].code}*/}
            {/*        </code>*/}
            {/*    </pre>*/}
            {/*    </div>)*/}
            {/*}*/}

        </Section>
    )
}

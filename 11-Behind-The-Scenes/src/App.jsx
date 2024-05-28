import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);
  const handleSetCount=(newCount)=> {
    setChosenCount(newCount);
    setChosenCount((prevCount)=>prevCount+1);
  }


  return (
    <>
      <Header />
      <main>
        <ConfigureCounter
            onSetCount={handleSetCount}
        ></ConfigureCounter>
        <Counter initialCount={chosenCount} key={chosenCount} />
        <Counter initialCount={1} />
      </main>
    </>
  );
}

export default App;

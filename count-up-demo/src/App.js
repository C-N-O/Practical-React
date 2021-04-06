import './App.css';
import CountUp, { useCountUp } from 'react-countup';

function App() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
  });

  return (
    <div className='App'>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(2000)}>Update</button>
      </div>
      <h1>
        <CountUp duration={2} end={500} />
        <br />
        <CountUp duration={5} end={500} />

        <br />
        <CountUp duration={5} start={200} end={500} />
        <br />
        <CountUp duration={5} start={0} end={1000} prefix='$' decimals={2} />
        <br />
        <CountUp
          duration={10}
          start={0}
          end={1000}
          prefix='$'
          decimals={2}
          suffix='USD'
        />
      </h1>
    </div>
  );
}

export default App;

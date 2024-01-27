import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.scss';
import { useCountStore } from './store';

function App() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const resetCount = useCountStore((state) => state.resetCount);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="mar-1" onClick={increaseCount} type="button">
          count is {count}
        </button>
        <button className="mar-1" onClick={resetCount} type="button">
          reset count
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

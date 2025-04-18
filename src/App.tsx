import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="usa-alert usa-alert--info">
        <div className="usa-alert__body">
          <h4 className="usa-alert__heading">Informative status</h4>
          <p className="usa-alert__text">
            Lorem ipsum dolor sit amet,
            <a className="usa-link" href="javascript:void(0);">
              consectetur adipiscing
            </a>
            elit, sed do eiusmod.
          </p>
        </div>
      </div>
      <div className="scss-test">
        <h1>vite + scss + uswds</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>vite + scss + uswds</h1>
      <div className="card">
        <button type="button" className="usa-button">
          Default
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

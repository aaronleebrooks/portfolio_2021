import styles from './index.modules.css';
import cx from 'classnames';

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <p>
          Aaron Brooks
        </p>
        <p>
          Software Engineer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

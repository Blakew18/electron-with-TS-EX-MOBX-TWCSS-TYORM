//NPM Imports
import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';

//Internal Imports
import { RootStoreProvider } from './providers/RootStoreProvider';
import { RootStore, setupRootStore } from './models/root-store';
import  PageOne  from './components/PageOne'

function App() {

  const [rootStore, setRootStore] = useState<RootStore>();

  useEffect(() => {
    if (rootStore) return
      setupRootStore()
        .then((rs) => {
          setRootStore(rs)
        })
        .catch((err) => {
          console.log('Failed to init Root Store');
          console.log(err)
        });
  }, [rootStore]);

  if (!rootStore) return(
    <div>
      <h1>Loading</h1>
    </div>
  )
  
  return (
    <div className="App">
      <RootStoreProvider value={rootStore}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          This is a check in app. 
        </h1>
        <a
          className="App-link"
          href="https://www.facebook.com/lindsay.robinson.92372"
          target="_blank"
          rel="noopener noreferrer"
        >
          It Does Not Work. I blame Lindsay
        </a>
        <PageOne />
      </header>
      </RootStoreProvider>
    </div>
  );
}

export default App;

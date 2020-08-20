import React, { useState } from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import './App.css';

function App() {
  const [page, setPage] = useState('page1');
  return (
    <div className="App">
      <div className="left-box">
        <div
          className={page === 'page1' ? 'active' : ''}
          onClick={() => setPage('page1')}
        >
          recoil
        </div>
        <div
          className={page === 'page2' ? 'active' : ''}
          onClick={() => setPage('page2')}
        >
          mobx
        </div>
        <div
          className={page === 'page3' ? 'active' : ''}
          onClick={() => setPage('page3')}
        >
          my recoil
        </div>
      </div>
      {page === 'page1' ? <Page1 /> : page === 'page2' ? <Page2 /> : <Page3 />}
    </div>
  );
}

export default App;

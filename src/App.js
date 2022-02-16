import React from 'react';

const api = {
  key: '094b3c64ca57bc590c163d710954a0f1',
  base: 'api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
      </main>
    </div>
  );
}

export default App;

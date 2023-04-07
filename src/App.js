import React, { useEffect, useState } from 'react';
import AsciiFrame from './MyComponent';

function App() {
  const [price, setprice] = useState('loading...');

  useEffect(() => {
    fetch('/price')
      .then(response => response.json())
      .then(data => setprice(data.price))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
        <AsciiFrame>
          <h1>FTSE 100 Price is:</h1>
          <p>{price}</p>
        </AsciiFrame>
    </div>
  );
}

export default App;

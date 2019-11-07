import React, { useState, useEffect } from 'react';

export function ClickCounterHooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  });

  return (
    <div>
      <p>{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
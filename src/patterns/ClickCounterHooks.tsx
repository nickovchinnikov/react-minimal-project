import React, { FC, useState, useEffect, useCallback } from 'react';

interface Props {
  defaultCount?: number
}

const ClickCallback = () => {
  console.warn("Clicked!")
}

export const ClickCounterHooks: FC<Props> = ({ defaultCount = 0 }) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(defaultCount);

  const [squredCount, setSquredCount] = useState(Math.pow(defaultCount, 2));

  useEffect(() => {
    document.addEventListener("click", ClickCallback)
  });

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  }, [count]);

  useEffect(() => {
    // Update the document title using the browser API
    console.warn(`${squredCount} squredCount`);
  }, [squredCount]);

  const clickHandler = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const clickSquaredHandler = () => {
    setSquredCount(Math.pow(count, 2))
  }

  return (
    <div>
      <p>{count} times</p>
      <button onClick={clickHandler}>
        Click me
      </button>
      <p>{squredCount} times (count squred!)</p>
      <button onClick={clickSquaredHandler}>
        Click me (count squred!)
      </button>
    </div>
  );
}
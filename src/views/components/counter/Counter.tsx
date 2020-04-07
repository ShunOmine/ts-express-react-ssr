import React, { useState } from 'react';

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>counter at: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} />
      <button onClick={() => setCounter(counter - 1)} />
    </div>
  )
};

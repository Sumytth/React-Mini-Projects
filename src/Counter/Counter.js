// Counter Project --
import { useState } from 'react';
import "./counter.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <section className='container'>
          <button onClick={handleClick}> + </button>
          <button className='reset' onClick={reset}> Reset </button>
          <button onClick={decrement}> - </button>
        </section>

      </div>
    </>
  )
}

export default Counter;


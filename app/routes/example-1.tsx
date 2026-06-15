import { useState } from 'react';

export default function Example1UseState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight">example-1-useState</h1>
      <p className="text-lg text-slate-400">{count}</p>

      <div className="flex items-center justify-center gap-2">
        <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" type="button" onClick={handleClick}>Increment</button>
        <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" type="button" onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

import React from "react";
import CodeBlock from './../components/CodeBlock'

const exampleCode = `
  import React, { useState } from "react";
   
  function Example() {
    const [count, setCount] = useState(0);
   
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  `.trim();

  
export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Hello world!</h1>
      <CodeBlock code={exampleCode} title="home.js" />
    </>
  )
}
  

  

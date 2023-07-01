import { useEffect, useState } from "react";

function Login1(){
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p> ...
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
}
function Login12(){
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p> ...
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
}
export default Login1;
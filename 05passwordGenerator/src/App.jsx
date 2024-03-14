import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3" 
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;


/*Notes:  

passwordRef.current?  or (passwordRef.current || 0) are both same ?
ChatGPT
The expressions passwordRef.current? and (passwordRef.current || 0) serve similar purposes, but they're not exactly the same.

passwordRef.current?: This uses the optional chaining operator ?.. It checks if passwordRef.current is truthy. If passwordRef.current is null or undefined, the expression evaluates to undefined. Otherwise, it evaluates to passwordRef.current. It's often used to safely access properties of potentially null or undefined objects without throwing an error.

(passwordRef.current || 0): This uses the logical OR operator ||. It evaluates the expression passwordRef.current. If passwordRef.current is falsy (like null, undefined, 0, false, NaN, or an empty string), it evaluates the expression 0. Otherwise, it evaluates to passwordRef.current. This is a common pattern to provide a default value in case the first expression is falsy.

In practice, they can behave similarly depending on the context. However, they have different behaviors when passwordRef.current is falsy:

With passwordRef.current?, it evaluates to undefined.
With (passwordRef.current || 0), it evaluates to 0.
In the specific context of your code, both expressions would handle the case when passwordRef.current is null or undefined, ensuring that accessing .setSelectionRange won't throw an error. However, the behavior might differ if passwordRef.current could potentially hold other falsy values.  */





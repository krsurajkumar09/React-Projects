import { useState } from "react";

function App() {
  let [prevCounter, setCounter] = useState(11);

  const increaseValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 30) {
        return Math.min(++prevCounter, 30);
      } else {
        return prevCounter;
      }
    });
  };

  const decreaseValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return Math.max(--prevCounter, 0);
      } else {
        return prevCounter;
      }
    });
  };

  return (
    <>
      <h1>Number Counter</h1>
      <h2>Counter Value: {prevCounter}</h2>
      <button onClick={increaseValue}>Counter ++</button> &nbsp; &nbsp;  

      

      <button onClick={decreaseValue}>Counter --</button>
      <p>Footer: {prevCounter}</p>
    </>
  );
}

export default App;

// Notes :

/* By adding &nbsp;&nbsp; between the two buttons, you'll create two non-breaking spaces, effectively adding a space of the desired width.  */

/* Math.min(prevCounter ++, 30)   , why it is not working properly

The expression prevCounter++ is a post-increment operation, which means that prevCounter is first used and then incremented by 1. In JavaScript, ++ increments the value by 1 but returns the original value before the increment. Therefore, when you use prevCounter++ inside Math.min(prevCounter++, 30), you're passing the original value of prevCounter to Math.min and then incrementing prevCounter, which can lead to unexpected behavior.

To correctly increment prevCounter inside Math.min, you should use pre-increment ++prevCounter or add 1 directly to prevCounter. Here's how you can do it:

Using pre-increment:



setCounter((prevCounter) => {
  if (prevCounter < 30) {
    return Math.min(++prevCounter, 30);
  } else {
    return prevCounter;
  }
});
Or adding 1 directly:


setCounter((prevCounter) => {
  if (prevCounter < 30) {
    return Math.min(prevCounter + 1, 30);
  } else {
    return prevCounter;
  }
});
Both of these methods will correctly increment prevCounter before passing it to Math.min, ensuring that the updated value is used for comparison.


*/



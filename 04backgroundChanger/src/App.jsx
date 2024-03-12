import { useState, useEffect } from "react";

function App() {
  let [color, setColor] = useState(() => {
    let storedColor = localStorage.getItem("backgroundColor");
    if (storedColor) {
      return storedColor;
    } else {
      return "brown";
    }
  });

  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor("#FF4500")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF4500" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("#f0f4f7")}
            className="outline-none px-4 py-1 rounded-full text-red-400 shadow-lg"
            style={{ backgroundColor: "#f0f4f7" }}
          >
            Pearl White
          </button>
          <button
            onClick={() => changeColor("#880808")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#880808" }}
          >
            Blood Red
          </button>
          <button
            onClick={() => changeColor("#00FF7F")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#00FF7F" }}
          >
            Green
          </button>
          <button
            onClick={() => changeColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-red-700 shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => changeColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => changeColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

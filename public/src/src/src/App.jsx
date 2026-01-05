import { useState } from "react";

function App() {
  const [yesCount, setYesCount] = useState(0);

  const handleYes = () => setYesCount(yesCount + 1);
  const handleNo = () => {
    alert("Nice try 😄 Just click YES!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-purple-400 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Will you forgive Dudu? 💖
      </h1>

      <div className="space-x-4">
        <button
          onClick={handleYes}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-xl"
        >
          YES {yesCount > 0 && `(${yesCount})`}
        </button>

        <button
          onClick={handleNo}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-xl"
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default App;

import Card from './components/Card'

import './App.css'

function App() {
  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-xl mb-4 ">
        Card Component
      </h1>
      <Card username="First User" btnText="Connect Me" /> <br />
      <Card username="Aditya" />
    </>
  );
}

export default App;

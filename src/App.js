import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  return (
    <div>
      <form>
        <div>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          placeholder="First name"
        />
        </div>
        <div>
            <input
          type="text"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Last name"
        />
        </div>
        <p>FIRST NAME: {fname}</p>
        <p>LAST NAME: {lname}</p>
      </form>
    </div>
  );
}

export default App;


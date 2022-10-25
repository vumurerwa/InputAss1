import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TextInput from './components/TextInput';

function App() {
  /*
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  */
 const [studendDetails, setStudentDetails] = useState({
  firstName:"",
  lastName:"",
  age:""

 });
 const changeStudentDetails = (e) => {
  setStudentDetails({...studendDetails,[e.target.name]:e.target.value});

 }
  return (
    /*
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
    </div>*/
    <div>
      <TextInput handleChange={changeStudentDetails} name="firstName" placeholder="First name"/>
      <TextInput handleChange={changeStudentDetails} name="lastName" placeholder="Last name"/>
      <TextInput handleChange={changeStudentDetails} name="age" placeholder="Age"/>
      <div>
        <p>First Name: {studendDetails.firstName}</p>
        <p>Last Name: {studendDetails.lastName}</p>
        <p>Age: {studendDetails.age}</p>
      </div>
    </div>
  );
}

export default App;

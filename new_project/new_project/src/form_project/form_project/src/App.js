import React,{useState} from 'react';
import './App.css';

function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  return (
    <div>
      <h1>Form in React</h1>
      <fieldset>
        <form>
        <label for="firstname">First Name </label>
        <input 
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
        />
        <label for="lastname">Last Name </label>
        <input 
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
        />
        <label for="firstname">First Name </label>
        <input 
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first Name"
            required
        />
        <label for="firstname">First Name </label>
        <input 
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first Name"
            required
        />
        </form>
      </fieldset>
    </div>
  );
}

export default App;

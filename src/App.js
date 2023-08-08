import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formDate, setFormData] = useState( {firstname: "", lastName: ""});

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    });
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
          />
        <br/> 
        <br></br>
        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
          />  
      </form>
    </div>
  );
}

export default App;

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

  const [formData, setFormData] = useState( {firstname: "", lastName: "", email: "", comments: "", isVisible: true});

  console.log(formData);
  

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type == "checkbox" ? checked : value
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
          value={formData.firstname}
          />
        <br/> 
        <br></br>
        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          /> 
        <br/> 
        <br></br>
        <input
          type="email"
          placeholder='Enter your email address'
          onChange={changeHandler}
          name="email"
          value={formData.email}
          />  
          <br/>

          <br/> 
        <br></br>
        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
          />  
          <br/>
          <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>Am I Visible ?</label>
      </form>
    </div>
  );
}

export default App;

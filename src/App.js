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

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""});

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
  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing is done........");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
          <br/>
          <br/>

          <fieldset>
            <legend>Mode:</legend>
            <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked = {formData.mode == "Online-Mode"}
          /> 
          <label htmlFor='Online-mode'>Online Mode</label>
          

          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id='Offline-Mode'
          checked = {formData.mode == "Offline-Mode"}
          /> 
          <label htmlFor='Offline-mode'>Offline Mode</label>
          </fieldset>

          <label htmlFor='favCar'>What is your favourite car ?</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
          >
            <option value="maruti800">Maruti 800</option>
            <option value="zen">Zen</option>
            <option value="spark">Spark</option>
            <option value="alto 800">Alto 800</option>
            <option value="nexon">Nexon</option>
            <option value="scorpio">Scorpio</option>
          </select>

          <br/>
          <br/>
          {/* <input type='Submit' value= 'Submit'/> */}
          <button>Submit</button>
          
      </form>
    </div>
  );
}

export default App;

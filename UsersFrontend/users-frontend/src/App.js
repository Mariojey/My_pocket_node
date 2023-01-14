import logo from './logo.svg';
import './App.css';
//import './components/createUser';
import {useState} from 'react'


function App() {

  const resultDiv = document.getElementById('resultDiv')

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: ""
  })

  function handleFormUpdate(event) {
    const target = event.currentTarget;

    if (target.name) {
      setFormData(prevState => {
        return({
          ...prevState,
          [target.name]: target.value
        })
      })
    }
  }

  function sendDataToBackend(){
    console.log("Hi");
    let result
    if (formData.username === "" || formData.password === "" || formData.name === "") {
      resultDiv.textContent = "Wpisz prawidłowe dane";
    }else{
     fetch("https://127.0.0.1:3000/users/", {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(formData)
      }).then(res => res.json())
      .then(res => {
          if (res.status === "OK") {
            console.log("OK");
            resultDiv.textContent = "OK"
          }else{
            console.log("Not OK");
          }
      })

    }
    console.log(formData);
}


  return (
    <div className="App">
      <form>
        <input  onChange={handleFormUpdate} name="username" type="text" id="username"     value={formData.username}  className="usernameField" placeholder="Podaj nazwę użytkownika... "/>
        <input  onChange={handleFormUpdate} name="password" type="password" id="password" value={formData.password}  className="passwordField" placeholder="Wpisz hasło..."/>
        <input  onChange={handleFormUpdate} name="name" type="text" id="name"         value={formData.name}  className="nameField" placeholder="Podaj imie... "/>
        <button type="submit" id="btn" onClick={sendDataToBackend}>Stwórz</button>
      </form>
      <div id="resultDiv">xD</div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
//import './components/createUser';
import {useState} from 'react'


function App() {

  const resultDiv = document.getElementById('resultDiv')

  const [formData, setFormData] = useState({
    username: "Will",
    password: "Alyss123",
    name: "Will Treaty"
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

  function sendDataToBackend(item){
    let result
    fetch("https://127.0.0.1:3000/users/", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(item)
    }).then(res => res.json())
    .then(res => {
        result = res.body;
        resultDiv.textContent = result;
    })
}

function getDataToSend(){
  if (formData.username == "" || formData.password == "" || formData.name == "") {
    resultDiv.textContent = "Wpisz prawidłowe dane";
  }
  const request = {
    username: formData.username,
    password: formData.password,
    name: formData.name
  }
    sendDataToBackend(request)
    resultDiv.textContent = "yes"
}

  return (
    <div className="App">
      <form>
        <input  onChange={handleFormUpdate} type="text" id="username"     value={formData.username}  className="usernameField" placeholder="Podaj nazwę użytkownika... "/>
        <input  onChange={handleFormUpdate} type="password" id="password" value={formData.password}  className="passwordField" placeholder="Wpisz hasło..."/>
        <input  onChange={handleFormUpdate} type="text" id="name"         value={formData.name}  className="nameField" placeholder="Podaj imie... "/>
        <button type="submit" id="btn" onClick={getDataToSend}>Stwórz</button>
      </form>
      <div id="resultDiv">xD</div>
    </div>
  );
}

export default App;

const username = document.getElementById('username');
const password = document.getElementById('password');
const name = document.getElementById('name');
const btn = document.getElementById('btn');
const resultDiv = document.getElementById('resultDiv');

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
if (btn) {
    btn.addEventListener('click', () => {
        if (username.value === null || password.value === null || name.value === null) {
            resultDiv.textContent = "Wpisz prawidłowe dane";
        }
        const request = {
            username: username.value,
            password: password.value,
            name: name.value,
        }
        sendDataToBackend(request)
        resultDiv.textContent = "yes"
    })   
}
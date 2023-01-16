const username = document.getElementById('username');
const password = document.getElementById('password');
const name = document.getElementById('name');
const btn = document.getElementById('btn');
const resultDiv = document.getElementById('resultDiv');
const userList = document.getElementById('users');

function sendDataToBackend(item) {
    let result
    fetch("http://127.0.0.1:3000/users", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item)
        }).then(res => res.json())
        .then(res => {
            result = res.body;
            console.log(result);
        })
}

function getDataFromBackend() {
    let result
    fetch("http://127.0.0.1:3000/users", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
        }).then(res => res.json())
        .then(res => {
            console.log(JSON.parse(res.body));
            if (res.status == "OK") {
                const p = document.createElement('p');
                p.textContent = 'OK'
                userList.appendChild(p);
            } else {
                const p = document.createElement('p');
                p.textContent = 'NOT OK'
                userList.appendChild(p);
            }
        })
}


btn.addEventListener('click', () => {
    const request = {
            username: username.value,
            password: password.value,
            name: name.value,
        }
        //console.log(request);
    sendDataToBackend(request)

})

userList.addEventListener('load', () => {
    getDataFromBackend()
})
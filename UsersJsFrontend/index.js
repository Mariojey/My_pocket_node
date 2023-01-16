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
                return res.body
            } else {
                console.log(`That's not working`);
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
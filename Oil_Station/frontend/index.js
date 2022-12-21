const fuels = [{
        id: 0,
        name: "98",
    },
    {
        id: 1,
        name: "95",
    },
    {
        id: 2,
        name: "Oil",
    },
    {
        id: 3,
        name: "Gas",
    },
];

const countOfLiters = document.getElementById('countOfLiters');
const selectFuel = document.getElementById('selectFuel');
const btn = document.getElementById('btn');
const resultDiv = document.getElementById('resultDiv');
let idFuel = 0

function sendDataToBackend(item) {
    let result
    fetch("http://127.0.0.1:8888/calculate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item)
        }).then(res => res.json())
        .then(res => {
            result = res.body;
            console.log(results);
        })
}

fuels.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    option.classList.add('option');
    selectFuel.appendChild(option);
})
selectFuel.addEventListener('change', event => {
    idFuel = event.target.value;

})


btn.addEventListener('click', () => {
    const request = {
        countOfLiters: countOfLiters.value,
        kindOfFuel: idFuel,
    }
    console.log(request);
    sendDataToBackend(request)

})
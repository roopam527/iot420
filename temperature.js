
// const sendTemperature = () =>{
// fetch("https://obscure-shore-41041.herokuapp.com/temperature/$2a$10$apKzU4dirjjo.qrIxQiDcOxCbIIQ7bVnvGLHZ1hpjE7GSul1RqGOq/40")
// .then(()=>{
//     sendPulse()
// })

// }


// const sendPulse = () =>{
//     fetch("https://obscure-shore-41041.herokuapp.com/pulse/$2a$10$apKzU4dirjjo.qrIxQiDcOxCbIIQ7bVnvGLHZ1hpjE7GSul1RqGOq/40")
//     .then(()=>{
//         setTimeout(sendTemperature(),18000)
//     })    

// }

// sendTemperature()


const api ="$2a$10$dN8pi4KOJG6fSt5kv8dZduc3T5gVlhQxTmkNK6qCV1VQNhhKbtNfG";
const temperature = ()=>{
    
    fetch("https://obscure-shore-41041.herokuapp.com/temperature/"+api+"/"+document.getElementById("room_temperature").value)
    .then(()=>{
        console.log("Hello")
    })
    console.log("room temperature")
}

const body_temperature = ()=>{
    fetch("https://obscure-shore-41041.herokuapp.com/body_temperature/"+api+"/"+document.getElementById("body_temperature").value);
    console.log("body temperature")
}

const pulse =()=>{
    fetch("https://obscure-shore-41041.herokuapp.com/pulse/"+api+"/"+document.getElementById("pulse").value);
console.log("Pulse")
}
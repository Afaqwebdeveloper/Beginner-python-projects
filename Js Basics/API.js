endpoint = "https://official-joke-api.appspot.com/jokes/programming/random"

fetch(endpoint)
.then(response => response.json())//promised
.then(data => console.log(data[0]))
.catch(error => console.error('Error:', error))

endpoint = "https://reqres.in/api/users"

let my_data ={
    name: 'Afaq ahmed',
    Job:'Programmer'
}

fetch(endpoint,{
    method:'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(my_data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
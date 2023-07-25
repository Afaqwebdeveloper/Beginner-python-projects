endpoint="https://api.openai.com/v1/completions"

model="text-davinci-003"


API_key="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"

const my_prompt= 'Once Upon a Time'


//const my_prompt=prompt('Enter a prompt: ')

let my_data ={
    "model": model,
  "prompt": my_prompt,
  "max_tokens": 100,
}

fetch(endpoint,{
    method:'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + API_key
    },
    body: JSON.stringify(my_data)
})
.then(response => response.json())
.then(data => console.log(data.choices[0].text))
.catch(error => console.error('Error:', error))
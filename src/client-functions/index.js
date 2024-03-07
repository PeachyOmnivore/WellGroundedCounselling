const URL = "http://localhost:5173"

function get() {
  console.log("hi")
}

function post(bodyData, endpoint) {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData)
  }

  fetch(`${URL}/${endpoint}`, options)
        .then(res => res.json())
        .then((data) => {
          return data
        })
}

function put() {
  console.log("hi")
}



export {
  get,
  post,
  put,
}
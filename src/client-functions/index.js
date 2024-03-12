const serverURL = "http://localhost:3030";

function get() {
    console.log("hi");
}

async function post(bodyData, endpoint) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
    };

    const response = await fetch(`${serverURL}/${endpoint}`, options);

    const data = await response.json();
    return data;
}

function put() {
    console.log("hi");
}

export { get, post, put };

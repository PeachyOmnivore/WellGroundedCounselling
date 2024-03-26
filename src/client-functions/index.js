const serverURL = "https://wellgroundedcounsellingserver.railway.internal"

async function get(endpoint) {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await fetch(`${serverURL}/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(
                `Error: ${response.status} - ${response.statusText}`
            );
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Error fetching requested info:", err);
    }
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

async function put(bodyData = {}, endpoint) {
    const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
    };
    
    console.log(options.body)
    const response = await fetch(`${serverURL}/${endpoint}`, options);

    const data = await response.json();
    return data;
}

async function deleteTimeSlot(endpoint){
    const token = localStorage.getItem("token");
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(`${serverURL}/${endpoint}`, options);
        if (!response.ok) {
            throw new Error(
                `Error: ${response.status} - ${response.statusText}`
            );
        }
        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Error deleting requested info:", err);
    }
}

export { get, post, put, deleteTimeSlot };

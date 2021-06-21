
// data posting to server 
export const postData = async (sendData, request) => {
    try {
        const res = await fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });
        return res;
    }
    catch (error) {
        console.log(error)
    }
}

// data posting to server 
export const patchData = async (sendData, request) => {
    try {
        const res = await fetch(request, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });
        return res;
    }
    catch (error) {
        console.log(error)
    }
}

export const getData = async (request) => {
    try {
        const response = await fetch(request, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const user = await response.json();
        return { user, response };

    } catch (error) {
        console.log(error)
    }
}




// data posting to server 
const postData = async (sendData, request) => {
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
export default postData
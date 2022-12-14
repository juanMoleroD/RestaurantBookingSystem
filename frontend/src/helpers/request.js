class Request {

    async get(url) {
        const response = await fetch(url);
        return response.json();
    }

    post(url, payload) {
        return fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(payload)
        });
    }

    put(url, payload) {
        return fetch(url, {
            method: "PUT",
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(payload)
        });
    }

    delete(url) {
        return fetch(url, {
            method: "DELETE",
            headers: {"Content-type": "application/json",
            body: null
         }
        })
    }
}

export default Request;
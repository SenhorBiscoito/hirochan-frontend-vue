const axios = require("axios");

export default function ({ store, redirect }) {
    axios.get("http://localhost:8080/auth/login")
        .then(res => console.log(res))
        .catch(err => {
            if (err.response.status == 403) {

                return redirect('/')
            }

        })
}


const axios = require("axios");

export default function ({ store, redirect }) {
    axios.get("http://localhost:8080/auth/login", { withCredentials: true })
        .then(res => {
            store.commit('session/update', res.data)
        })
        .catch(err => {
            console.log(err.response)
            window.location.href = "http://localhost:8080/auth"
        })
}


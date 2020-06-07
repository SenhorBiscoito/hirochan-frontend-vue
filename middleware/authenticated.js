const axios = require("axios");

export default async ({ store, redirect }) => {

    await axios.get(`${process.env.baseUrl}/auth/login`, { withCredentials: true })
        .then(res => {
            console.log(res.data)
            store.commit('session/update', res.data)
        })
        .catch(err => {
            console.log(err.response)
            window.location.href = `${process.env.baseUrl}/auth`
        })
}


import Vue from 'vue';
import axios from '~/plugins/axios';

Vue.mixin({
    methods: {
        // My backedn
        async get(url) {
            try {
                const data = await axios.get(url);
                return data;
            } catch (e) {
                return e;
            }
        },
        async post(url, body) {
            try {
                const data = await axios({
                    method: "post",
                    url,
                    data: body,
                    header: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data"
                    }
                });

                return data;

            } catch (e) {
                return e;
            }
        },
        async delete(url, body) {
            try {
                const data = await axios({
                    method: "delete",
                    url,
                    data: body,
                    header: {
                        Accept: "application/json",
                    }
                });

                return data;

            } catch (e) {
                return e;
            }
        },
        // Discord
        async discordGet(url, accessToken) {
            try {
                const data = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                    baseURL: 'https://discord.com',
                });
                return data;
            } catch (e) {
                return e.response;
            }
        },
        async discordPost(url, body, accessToken) {
            try {
                const data = await axios({
                    method: "post",
                    url,
                    data: body,
                    baseURL: 'https://discord.com',
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data"
                    }
                });

                return data;

            } catch (e) {
                return e.response;
            }
        },
        async discordDelete(url, body, accessToken) {
            try {
                const data = await axios({
                    method: "delete",
                    "Authorization": `Bearer ${accessToken}`,
                    url,
                    baseURL: 'https://discord.com',
                    data: body,
                    headers: {
                        Accept: "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    }
                });

                return data;

            } catch (e) {
                return e.response;
            }
        },

    }
})
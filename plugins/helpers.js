import Vue from 'vue';
import axios from '~/plugins/axios';

Vue.mixin({
    methods: {
        // My backedn
        async axiosGet(url) {
            try {
                const data = await axios.get(url);
                return data;
            } catch (e) {
                return e;
            }
        },
        async axiosPost(url, body) {
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
        async axiosDelete(url, body) {
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
        async discordGet(url, headers) {
            try {
                const data = await axios.get(url, headers);
                return data;
            } catch (e) {
                return e;
            }
        },
        async discordPost(url, body, headers) {
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
        async discordDelete(url, body, headers) {
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

    }
})
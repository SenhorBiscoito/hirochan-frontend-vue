import Vue from 'vue';
import axios from '~/plugins/axios';

Vue.mixin({
    methods: {
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
    }
})
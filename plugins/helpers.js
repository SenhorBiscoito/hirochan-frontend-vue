import Vue from 'vue';
import axios from '~/plugins/axios';

Vue.mixin({
    methods: {
        async axiosGet(url) {
            try {
                const data = await axios.get(url);
                return data;
            } catch (e) {
                return null
            }
        },
    }
})
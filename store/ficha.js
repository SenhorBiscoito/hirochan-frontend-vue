export const state = () => ({
    ficha: null
});


export const getters = {
    get(state) {
        return state.ficha;
    }
}

export const mutations = {
    update(state, newValue) {
        state.ficha = newValue
    }
}
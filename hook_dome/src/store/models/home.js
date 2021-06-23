/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */

export default {
    state: {
        num:0
    },
    reducers: {
        updateState(state, payload) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {
        async incrementAsync(payload, rootState) {
           setTimeout(()=>{
               this.updateState({num:22 });
           },2000)
        },
    }
}
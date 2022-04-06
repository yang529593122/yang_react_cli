/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import { getRequest, postRequest } from "../../api/http";
import { BaseUrl } from "../../consts";
export default {
  state: {
    num: 0,
    homeData: null,
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
    async incrementAsync(payload) {
      let data = await getRequest(`${BaseUrl}/article/list`, payload);
    },
    async incrementAsyncPost(payload) {
      let data = await postRequest(`${BaseUrl}/article/item`, payload);
    },
  },
};

import { createModel } from "@rematch/core";
import { RootModel } from "../store";
// import AuthManager from './api'

export type AuthState = {
  user: { name: string };
};

const auth = createModel<RootModel>()({
  state: {
    user: {
      name: "deneme",
    },
  } as AuthState,

  reducers: {
    setUser: (state: AuthState, user: { name: string }) => {
      return {
        ...state,
        user,
      };
    },
  },

  effects: (dispatch) => ({
    // async getUserAsync({ code }: any): Promise<any> {
    //   let response = await AuthManager.login({ code })
    //   dispatch.auth.setUser(response)
    //   dispatch.app.getAddressesAsync()
    //   dispatch.app.getBillsAsync()
    // }
  }),
});

export default auth;

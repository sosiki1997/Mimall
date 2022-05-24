//  商城Vuex-mutations

export default {
  saveUserName(state, username) {
    // vuex读取
    state.username = username;
  },
  saveCartCount(state, count) {
    state.cartCount = count;
  },
};

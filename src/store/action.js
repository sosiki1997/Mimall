// 商城Vuex-actions

export default {
  saveUserName(context, username) {
    // vuex传输
    context.commit("saveUserName", username);
  },
  saveCartCount(context, count) {
    context.commit("saveCartCount", count);
  },
};

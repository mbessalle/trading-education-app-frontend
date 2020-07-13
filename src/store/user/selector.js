export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectUsername = (state) => {
  const email = state.user.email;
  if (email) {
    return email.match(/(\w+)@/)[1];
  }
};

export default {
  toggleTheme: (state: any) => {
    state.theme = state.theme === "light" ? "dark" : "light";
  },
};

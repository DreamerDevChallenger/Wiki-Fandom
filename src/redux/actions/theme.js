export const themeActions = {
  toggle: (draft) => {
    return draft === "light" ? "dark" : "light";
  },
  set: (draft, action) => {
    return action.payload;
  },
};

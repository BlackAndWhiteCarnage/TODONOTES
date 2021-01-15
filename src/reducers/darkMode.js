const toggleDarkMode = (state = false, action) => {
  switch (action.type) {
    case "DARKMODE":
      return (state = !state);
    default:
      return state;
  }
};

export default toggleDarkMode;

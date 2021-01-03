const toggleReducer = (state = 0, action) => {
  switch (action.type) {
    case "BACK":
      return (state = 0);
    case "TASKTOGGLE":
      return (state = 1);
    case "NOTEBOOKTOGGLE":
      return (state = 2);
    case "ADDTASK":
      return (state = 3);
    case "NOTEBOOKSLISTS":
      return (state = 4);
    default:
      return state;
  }
};

export default toggleReducer;

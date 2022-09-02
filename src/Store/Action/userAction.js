function addUser() {
  return {
    type: "ADD_USER",
    payload: user,
  };
}

function removeUser() {
  return {
    type: "REMOVE_USER",
  };
}

export { addUser, removeUser };

export default (state, action) => {
  if (action.type === 'SET_PROJECT') {
    return action.project;
  }
  return state;
};

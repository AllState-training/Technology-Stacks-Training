

function userReducer(state=[],action){
    
      switch (action.type) {
          case 'ADD_USER':
               state = state.concat(action.user);
               return state;
          case 'DELETE_USER':
                state = state.filter((user) => user.id !== action.id);
                return state;
          case 'FETCH_USERS':
                return action.users;
          default:
                return state;
      }
}

export default userReducer;
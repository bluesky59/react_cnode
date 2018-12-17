function user (state = {
  loading: true,
  data: {
    avatar_url: '',
    loginname: '',
    score: '',
    create_at: '',
    recent_topics: [],
    recent_replies: [],
  },
}, action) {
  switch(action.type){
    case 'LIST_UPDATE':
      return {
        loading: state.loading,
        data: state.data
      }
    case 'LIST_UPDATE_SUCCESS':
      return {
        loading: false,
        data: action.data
      }
    case 'LIST_UPDATE_ERROR':
      return {
        loading: false,
        data: state.data
      }
    default:
      return state;
  }
}

export default user;
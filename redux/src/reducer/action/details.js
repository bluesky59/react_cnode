function details (state = {
  loading: true,
  data: {
    title: '',
    author: {
      avatar_url: '',
      loginname: '',
    },
    create_at: '',
    content: '',
    reply_count: '',
    replies: [
      {
        ups: [],
        author: {
          avatar_url: '',
          loginname: '',
        },
        content: '',
        create_at: '',
      }
    ],
  },
}, action) {
  switch(action.type){
    case 'DETAILS_UPDATE':
      return {
        loading: state.loading,
        data: state.data
      }
    case 'DETAILS_UPDATE_SUCCESS':
      return {
        loading: false,
        data: action.data
      }
    case 'DETAILS_UPDATE_ERROR':
      return {
        loading: false,
        data: state.data
      }
    default:
      return state;
  }
}

export default details;
export default {
  namespace: 'products',
  state: [
    {
      name: 'dva',
      key: 1,
    },
    {
      name: 'react',
      key: 2,
    }
  ],
  reducers: {  // 处理同步
    'delete'(state, { payload: key }) {
      return state.filter(item => item.key !== key);
    },
    'add'(state, { payload: name }) {
      return state.concat([{
        name: name,
        key: new Date().getTime(),
      }])
    }
  },
  effects: {// 处理异步
    * asyncDelete ({ payload, callback }, { call, put }) {
      yield put({
        type: 'delete',
        payload: payload
      })
    }
  }
}
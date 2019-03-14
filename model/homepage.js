const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const model = {
  namespace: 'index',
  state: {
    name: 'hopperhuang',
    count: 0,
    init: false,
  },
  reducers: {
    caculate(state, payload) {
      const { count } = state;
      const { delta } = payload;
      return { ...state, count: count + delta };
    },
    getdata1(state, payload) {
      const { getdata1 } = payload;
      return { ...state, getdata1 };
    },
  },
  effects: {
    *init(action, { put }) {
      yield delay(2000);
      yield put({ type: 'caculate', delta: 1 });
    },
    *getdata(action, { put }){
      const res = yield  window
      .fetch(`/api`)
      .then(response => response.json().then(data => data));
      yield put({ type: 'getdata1', res });
    }
  },
};

export default model;


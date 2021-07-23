let initialState = {
  friends: [
    {
      id: 1,
      name: 'Alexander',
      image:
        'https://sun9-12.userapi.com/impf/c636322/v636322583/b32d/A1C4yslHVz4.jpg?size=600x761&quality=96&sign=66b155836c0ecd7553bb0daad52a1488&type=album',
    },
    {
      id: 2,
      name: 'Toxa',
      image:
        'https://sun9-39.userapi.com/impg/fZsEdm8cdQUduXkEFiPfxJa8cVgO6GinH2gtOA/T8qiPLJNXJY.jpg?size=1280x1279&quality=96&sign=9a9830b83f52b6d3c16876887cf09086&type=album',
    },
    {
      id: 3,
      name: 'RomanK',
      image:
        'https://sun9-14.userapi.com/impf/c831508/v831508819/17ecd8/uP6OKEehOxk.jpg?size=810x1080&quality=96&sign=4e014c59593854c4f381bda324b3ef99&type=album',
    },
  ],
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;

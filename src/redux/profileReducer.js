const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'I bought a new dress today',
      likesCount: 15,
      image:
        'https://sun9-12.userapi.com/impf/c636322/v636322583/b32d/A1C4yslHVz4.jpg?size=600x761&quality=96&sign=66b155836c0ecd7553bb0daad52a1488&type=album',
    },
    {
      id: 2,
      message: 'I believe i can fly',
      likesCount: 125,
      image:
        'https://sun9-39.userapi.com/impg/fZsEdm8cdQUduXkEFiPfxJa8cVgO6GinH2gtOA/T8qiPLJNXJY.jpg?size=1280x1279&quality=96&sign=9a9830b83f52b6d3c16876887cf09086&type=album',
    },
    {
      id: 3,
      message: 'Show must go on!',
      likesCount: 364,
      image:
        'https://sun9-14.userapi.com/impf/c831508/v831508819/17ecd8/uP6OKEehOxk.jpg?size=810x1080&quality=96&sign=4e014c59593854c4f381bda324b3ef99&type=album',
    },
    {
      id: 4,
      message: 'I learn React',
      likesCount: 185,
      image:
        'https://sun9-62.userapi.com/impg/c858432/v858432515/1c4aa0/IGQCtKj3nNA.jpg?size=720x1080&quality=96&sign=3a228a618372e3eaef28b6fd653571f3&type=album',
    },
    {
      id: 5,
      message: 'hello world!',
      likesCount: 1,
      image:
        'https://sun9-10.userapi.com/impf/poh3AlWYMVK9I2RXZH-GzoklXrsmvuWd1iBwGA/MtEROs9liDA.jpg?size=720x1080&quality=96&sign=c1162d87d9574f66085959f2ca31be19&type=album',
    },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        image: 'https://source.unsplash.com/random',
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;

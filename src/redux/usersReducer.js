const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     'https://sun9-62.userapi.com/impg/c858432/v858432515/1c4aa0/IGQCtKj3nNA.jpg?size=720x1080&quality=96&sign=3a228a618372e3eaef28b6fd653571f3&type=album',
    //   followed: false,
    //   fullName: 'Julia Malay',
    //   status: 'I learn React',
    //   location: {city: 'Tomsk', country: 'Russia'},
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     'https://sun9-14.userapi.com/impf/c831508/v831508819/17ecd8/uP6OKEehOxk.jpg?size=810x1080&quality=96&sign=4e014c59593854c4f381bda324b3ef99&type=album',
    //   followed: true,
    //   fullName: 'Roman Kos',
    //   status: "I'm a bitch, i'm a boss",
    //   location: {city: 'Miami', country: 'USA'},
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     'https://sun9-12.userapi.com/impf/c636322/v636322583/b32d/A1C4yslHVz4.jpg?size=600x761&quality=96&sign=66b155836c0ecd7553bb0daad52a1488&type=album',
    //   followed: true,
    //   fullName: 'Alexander Bokovoy',
    //   status: "I'm ill",
    //   location: {city: 'Shymkent', country: 'Kazakhstan'},
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;

import classes from './Profile.module.css';
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="coffee beans"
        ></img>
      </div>
      <div>ava+desc</div>
      <div>
        my post
        <div>new post</div>
        <div className={classes.post}>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

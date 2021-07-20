import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="coffee beans"
        ></img>
      </div>
      <div className={classes.descriptionBlock}>ava+desc</div>
    </div>
  );
};
export default ProfileInfo;

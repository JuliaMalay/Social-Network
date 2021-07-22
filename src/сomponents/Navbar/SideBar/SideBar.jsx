import classes from './SideBar.module.css';
const SideBar = (props) => {
  let friendElement = props.friends.map((friend) => {
    return (
      <div className={classes.friendItem}>
        <div className={classes.avatar}>
          <img src={friend.image} alt="avatar"></img>
        </div>
        <div>{friend.name}</div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <h3>Friends:</h3>
      <div className={classes.friends}>{friendElement}</div>
    </div>
  );
};
export default SideBar;

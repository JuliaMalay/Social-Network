import StoreContext from '../../../StoreContext';
import classes from './SideBar.module.css';
const SideBarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let friendElement = state.sideBar.friends.map((friend) => {
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
      }}
    </StoreContext.Consumer>
  );
};
export default SideBarContainer;

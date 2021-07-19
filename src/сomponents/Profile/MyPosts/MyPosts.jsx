import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      my post
      <div className={classes.post}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;

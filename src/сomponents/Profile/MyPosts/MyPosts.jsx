import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.post}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;

import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

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
      <div className={classes.post}>{postsElement}</div>
    </div>
  );
};
export default MyPosts;

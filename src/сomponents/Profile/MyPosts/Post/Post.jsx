import classes from './Post.module.css';
const Post = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.avatar}>
        <img src={props.image} alt="avatar"></img>
      </div>
      <div>{props.message}</div>
      <div>likes: {props.likesCount}</div>
    </div>
  );
};
export default Post;

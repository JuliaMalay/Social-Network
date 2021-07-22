import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <div className={classes.avatar}>
        <img src={props.image} alt="avatar"></img>
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;

import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <Dialog name="Alexander" id="1" />
        <Dialog name="Toxa" id="2" />
        <Dialog name="RomanK" id="3" />
        <Dialog name="JuliaM" id="4" />
        <Dialog name="Rom4ik" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello!" />
        <Message message="What's up!" />
        <Message message="Good morning!" />
      </div>
    </div>
  );
};
export default Dialogs;

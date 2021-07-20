import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => {
    return <Dialog name={dialog.name} id={dialog.id} />;
  });

  let messagesElements = props.messages.map((message) => {
    return <Message message={message.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;

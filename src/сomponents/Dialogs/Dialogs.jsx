import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  console.log(props.dialogPage.dialogs);
  let dialogsElements = props.dialogPage.dialogs.map((dialog) => {
    return <Dialog name={dialog.name} id={dialog.id} image={dialog.image} />;
  });

  let messagesElements = props.dialogPage.messages.map((message) => {
    return <Message message={message.message} />;
  });

  const onAddMessage = () => {
    props.addMessage();
    // props.dispatch(addMessageActionCreator());
  };
  const onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
    // props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea
          onChange={onMessageChange}
          value={props.dialogPage.newMessageText}
        ></textarea>
      </div>
      <div>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  );
};
export default Dialogs;

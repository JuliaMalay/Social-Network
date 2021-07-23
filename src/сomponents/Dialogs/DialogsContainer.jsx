import React from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogReducer';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogPage;

        const addMessage = () => {
          // props.addMessage();
          store.dispatch(addMessageActionCreator());
        };
        const onMessageChange = (text) => {
          // let text = event.target.value;
          // props.updateNewMessageText(text);
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            dialogPage={state}
            // dialogs={state.dialogPage.dialogs}
            // messages={state.dialogPage.messages}
            // newMessageText={state.dialogPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;

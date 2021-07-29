import React from 'react';
import Dialogs from './Dialogs';

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

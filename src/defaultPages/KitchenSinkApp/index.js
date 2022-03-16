import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global } from "@emotion/core";

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { CometChatAvatar } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { COMETCHAT_CONSTANTS } from '../../consts';

import {
  wrapperStyle,
  errorStyle,
  titleStyle,
  subtitleStyle,
  userContainerStyle,
  userWrapperStyle,
  thumbnailWrapperStyle,
  uidWrapperStyle,
  inputWrapperStyle,
  loginBtn,
} from "./style";

import { loaderStyle } from "./loader";

import * as actions from '../../store/action';

class KitchenSinkApp extends React.PureComponent {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  login = (uid) => {
    
    if(!uid) {
      uid = this.myRef.current.value;
    }

    this.uid = uid;
    this.props.onLogin(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY);
  }
  
  render() {

    let loader = null;
    if (this.props.loading) {
      loader = (<div className="loading">Loading...</div>);
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (<p css={errorStyle()}>{this.props.error.message}</p>);
    }

    let authRedirect = null;
    if (this.props.isLoggedIn) {
      authRedirect = <Redirect to="/" />
    }

    return (
      <React.Fragment>
      <Global styles={loaderStyle} />
      <div css={wrapperStyle()}>
          {authRedirect}
          {loader}
          {errorMessage}
          <p css={titleStyle()}>Chat.Pizza</p>
          <p css={subtitleStyle()}>It's time for a Pizza Party!</p>
          <div css={userContainerStyle()}>
            <div css={userWrapperStyle()} onClick={()=>this.login('dh-0001')}>
              <div css={thumbnailWrapperStyle()}>
                <CometChatAvatar image='https://thumbs.dreamstime.com/b/adolf-hitler-portrait-painted-b-jackobs-image-book-bilder-aus-dem-leben-des-f%C3%BChrers-adolf-hitler-portrait-painted-183308284.jpg' />
              </div>
              <p>DH-0001</p>
            </div>
            <div css={userWrapperStyle()} onClick={()=>this.login('dev-0001')}>
              <div css={thumbnailWrapperStyle()}>
                <CometChatAvatar image='https://back2godhead.com/wp-content/uploads/2013/12/Lord-Buddha.jpg' />
              </div>
              <p>Little Dawg</p>
            </div>
            <div css={userWrapperStyle()} onClick={()=>this.login('atw-0001')}>
              <div css={thumbnailWrapperStyle()}>
                <CometChatAvatar image='https://viamediationcentre.org/images/categoryimages/1591386952man-between-two-large-fists-mediator-concept_shutterstock-534306652.jpg' />
              </div>
              <p>Big Dawg</p>
            </div>
            <div css={userWrapperStyle()} onClick={()=>this.login('dev-0002')}>
              <div css={thumbnailWrapperStyle()}>
                <CometChatAvatar image='https://static-cdn.jtvnw.net/jtv_user_pictures/c85cb2f8-bf5d-40da-bbb8-53df54b21b11-profile_image-150x150.png' />
              </div>
              <p>CouchFam Law</p>
            </div>
            <div css={userWrapperStyle()} onClick={()=>this.login('dev-0003')}>
              <div css={thumbnailWrapperStyle()}>
                <CometChatAvatar image='https://th.bing.com/th/id/OIP.I4vzH9WypsrlLCJyBrbxrQHaGk?pid=ImgDet&rs=1' />
              </div>
              <p>CouchFam Viewing</p>
            </div>
          </div><br/>
          <div css={uidWrapperStyle()}>
            <div>
              <p css={subtitleStyle()}>Login with UID</p>
            </div>
            <div css={inputWrapperStyle()}>
              <input ref={this.myRef} type="text" placeholder="Enter your UID here" />
            </div>
            <div css={loginBtn()}><button type="button" onClick={() => this.login()}>Login</button></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( KitchenSinkApp );

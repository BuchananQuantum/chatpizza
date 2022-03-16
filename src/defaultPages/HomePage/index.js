import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { wrapperStyle, titleStyle, subTitleStyle, componentStyle, boxStyle, titleWrapperStyle, thumbnailWrapperStyle, componentTitleStyle, UIComponentStyle, descWrapperStyle, linkWrapperStyle, linkStyle, logoutBtn } from "./style";

import * as actions from "../../store/action";

import CometChatUI from "./resources/CometChatUI.png";
import Component from "./resources/components.png";
import listComponent from "./resources/gfy_lady.jpg";

class HomePage extends React.Component {
	render() {
		let authRedirect = null;
		if (!this.props.isLoggedIn) {
			authRedirect = <Redirect to="/login" />;
		}

		return (
			<div css={wrapperStyle()}>
				{authRedirect}
				<p css={titleStyle()}>Chat Pizza is a place for everyone to have their slice of the pie!</p>
				<p css={subTitleStyle()}>Check out some of the features, add some friends to your custom group and get the chat pizza party started!</p>

				<div css={UIComponentStyle()}>
					<div css={boxStyle()}>
						<div css={titleWrapperStyle()}>
							<div css={thumbnailWrapperStyle}>
								<img src={CometChatUI} alt="CometChatUI" />
							</div>
							<h2 css={componentTitleStyle()}>Chat Pizza Messenger</h2>
						</div>
						<div css={descWrapperStyle()}>
							<p>
								The <code>Chat Pizza</code> full messenger.
							</p>
						</div>
						<ul css={linkWrapperStyle()}>
							<li>
								<Link css={linkStyle()} to="/embedded-app">
									Launch
								</Link>
							</li>
						</ul>
					</div>
				</div>


				<div css={componentStyle()}>
					<div css={boxStyle()} style={{ maxWidth: "33%" }}>
						<div css={titleWrapperStyle()}>
							<div css={thumbnailWrapperStyle}>
								<img src={listComponent} alt="Joel Harden Owes John Buchanan" />
							</div>
							
						</div>
						<h2 css={componentTitleStyle()}>Joel's Outstanding Balance</h2>
						<div className="joels-bill" css={descWrapperStyle()}>
							<ul>
								<li><h1>$8,530,000</h1><code>Grand Total Settlement!</code></li>
						    </ul>
							
							

							
							
							
						</div>
						<p>Those off contract <code>overages at $250hr</code> don't stop when you keep demanding I work in text, dipshit. </p>
						<ul css={linkWrapperStyle()}>
							<li>
								<a href="https://gfy.com/" target="_blank" title="Go fuck Yourself">
									Set up a Payment Plan here! 
								</a>
							</li>
						</ul>
					</div>
				</div>
				
				<div css={logoutBtn()}>
					<button type="button" onClick={this.props.onLogout}>
						Logout
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error,
		isLoggedIn: state.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

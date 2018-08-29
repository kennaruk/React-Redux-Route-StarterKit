import React from "react";
import { connect } from "react-redux";

import Root from "../components/Root";
import HomeContainer from "./HomeContainer";

import { INDEX_PATH } from "../constants/RouterConstants";

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => {
	const { router } = state;

	return {
		paths: [INDEX_PATH],
		router,
		routes: {
			[INDEX_PATH]: HomeContainer
		}
	};
};

export default connect(
	mapStateToProps,
	{}
)(RootContainer);

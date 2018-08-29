import React, { Component } from "react";

import Router from "../components/Router";

class Root extends Component {
	render() {
		const { router, routes } = this.props;
		return (
			<div>
				<Router router={router} routes={routes} />
			</div>
		);
	}
}

export default Root;

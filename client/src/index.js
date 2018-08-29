import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import OfflinePluginRuntime from "offline-plugin/runtime";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import configureStore from "./store/configureStore";
import RootContainer from "./containers/RootContainer";

OfflinePluginRuntime.install();
registerServiceWorker();

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={configureStore()}>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	);
};

render(RootContainer);

if (module.hot) {
	module.hot.accept("./containers/RootContainer", () => {
		render(RootContainer);
	});
}

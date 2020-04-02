// import "../assets/styles/_index.scss";
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/fontawesome.min.css";
import "../assets/styles/animate.min.css";
import "../assets/styles/slick.css";
import "../assets/styles/slick-theme.css";
import "../assets/styles/responsive.scss";
import "../assets/styles/carousel.min.css";
import "../assets/styles/style.scss";

// Plugins
import "react-notifications/lib/notifications.css";
import "react-day-picker/lib/style.css";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import makeStore from "Store";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";
import { NotificationContainer } from "react-notifications";

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <DefaultSeo title="Venture Cars" description="Venture Cars" />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
        <NotificationContainer />
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));

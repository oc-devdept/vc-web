import "../assets/styles/_index.scss";
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
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

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

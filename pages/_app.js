import "../assets/styles/bootstrap.min.css";
import "../assets/styles/fontawesome.min.css";
import "../assets/styles/style.css";
import "../assets/styles/responsive.css";
import "../assets/styles/animate.min.css";
import "../assets/styles/slick.css";
import "../assets/styles/slick-theme.css";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import makeStore from "Store";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";

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
        <DefaultSeo
          title="Venture Cars"
          description="Venture Cars"
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));

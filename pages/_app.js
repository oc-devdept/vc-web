// import "../assets/styles/_index.scss";
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/animate.min.css";
import "../assets/styles/slick.css";
import "../assets/styles/slick-theme.css";
import "../assets/styles/responsive.scss";
import "../assets/styles/carousel.scss";
import "../assets/styles/style.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

// Plugins
import "react-multi-carousel/lib/styles.css";
import "react-notifications/lib/notifications.css";
import "react-day-picker/lib/style.css";
import "../assets/styles/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import makeStore from "Store";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";
import { NotificationContainer } from "react-notifications";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_jIFi9RGBEaAIkErwMgosR9yq00rutW1trK");

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <DefaultSeo title="Venture Cars" description="Venture Cars" />
        <Elements stripe={stripePromise}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Elements>
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
        <NotificationContainer />
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));

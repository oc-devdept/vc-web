import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <Container>
                    <DefaultSeo
                        title="Venture Cars Singapore - Case Trust Accredited PI Car Dealer"
                        description="Venture Cars | Singapore's Fastest Growing Casetrust Accredited Parallel Importer. Specializing in Toyota and Honda Makes."
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://venturecars.com.sg/',
                            site_name: 'Venture Cars Singapore - Case Trust Accredited PI Car Dealer',
                        }}
                    />
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Container>
            );
        }
    }
)
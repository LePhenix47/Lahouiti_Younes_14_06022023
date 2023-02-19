//Next
import type { AppProps } from "next/app";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS
import "../sass/main.scss";

//Redux
//React-Redux
import { Provider as ReduxProvider } from "react-redux";
//Redux Persist

//Store
import { store } from "../redux/store/store";

/**
 * Root component where all the pages will pass through
 *
 * This file should be changed *only if*:
 *
 * - You want to set a page layout
 *
 * - You want to add a provider for a global state (for React, Redux, TanStackQuery...)
 *
 * This file **must not** be nested inside a React Fragment
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ReduxProvider>
  );
}

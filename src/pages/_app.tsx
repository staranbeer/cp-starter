import "@styles/globals.css";
import "@styles/designSystem.css";
import "@styles/tokens.css";
import "@styles/componentOverrides.css";

import { AppWrapper } from "@components/AppWrapper";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

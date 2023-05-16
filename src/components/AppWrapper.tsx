import { ReactElement } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { Root, SSRProvider } from "@cube-dev/ui-kit";
import { JengaIconContext } from "@jengaicons/react";
import { SSRProvider as AriaSSRProvider } from "@react-aria/ssr";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import CPThemeProvider from "./library/context/CPThemeProvider";

/**
 *  wrapper that has various providers
 */
export const AppWrapper = ({
  session,
  children,
}: {
  session?: Session | null;
  children: ReactElement;
}) => {
  const router = useRouter();

  return (
    <SessionProvider session={session} refetchInterval={0}>
      <Script
        async
        defer
        src="https://analytics.umami.is/script.js"
        data-website-id="a1870f33-97a9-488a-82c1-bbd7cc404fef"
      />
      <AriaSSRProvider>
        <SSRProvider>
          <Root
            fonts={false}
            monospaceFont={"monospace,sans-serif"}
            font={"Inter, sans-serif"}
            router={router}
            styles={{
              '& [data-qa="ModalWrapper"]': {
                "@cube-dynamic-viewport-height": "100vh", //ModalWrapper fix for the meantime
              },
            }}
          >
            {/* <AppErrorBoundary> */}
            <SWRConfig>
              <JengaIconContext.Provider
                value={{
                  size: "1.25rem",
                  color: "var(--cp-icon)",
                }}
              >
                <CPThemeProvider>{children}</CPThemeProvider>
              </JengaIconContext.Provider>
            </SWRConfig>
            {/* </AppErrorBoundary> */}
          </Root>
        </SSRProvider>
      </AriaSSRProvider>
    </SessionProvider>
  );
};

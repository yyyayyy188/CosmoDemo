"use client";
import "./globals.css";

import { ChainProvider } from "@cosmos-kit/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { assets, chains } from "chain-registry";
import { wallets } from "@cosmos-kit/keplr";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "@/theme";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <ChainProvider
                chains={chains}
                assetLists={assets}
                wallets={wallets}
                walletConnectOptions={{
                  signClient: {
                    projectId: "a8510432ebb71e6948cfd6cde54b70f7",
                    relayUrl: "wss://relay.walletconnect.org",
                    metadata: {
                      name: "Cosmos Kit dApp",
                      description: "Cosmos Kit dApp built by Create Cosmos App",
                      url: "https://docs.cosmology.zone/cosmos-kit/",
                      icons: [],
                    },
                  },
                }}
              >
                <Box minHeight="100dvh">{children}</Box>
              </ChainProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

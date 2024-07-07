import React, { MouseEventHandler } from "react";
import {
  Container,
  Grid,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME } from "@/config";
import { WalletStatus } from "cosmos-kit";
import { ConnectWalletButton } from "./WalletButton";
import { Button } from "@interchain-ui/react";
import { createRpcQueryHooks, useRpcClient } from "codegen";

const Center = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
});

const GridItem = styled(Grid)({
  marginBottom: "20px",
});

const WalletConnection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    chain: chainInfo,
    logoUrl,
  } = useChain(CHAIN_NAME);
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };
  const onClickOpenView: MouseEventHandler = async (e) => {
    e.preventDefault();
    openView();
  };



  return (
    <Center>
      <Container maxWidth="sm">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <GridItem item xs={12}>
            <Typography variant="h4" align="center">
              Osmosis TestNet
            </Typography>
          </GridItem>
          <GridItem item xs={12}>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius="lg"
              bgcolor={
                theme.palette.mode === "light" ? "white" : "blackAlpha.400"
              }
              boxShadow={
                theme.palette.mode === "light"
                  ? "0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3"
                  : "0 0 2px #363636, 0 0 8px -2px #4f4f4f"
              }
              spacing={4}
              px={4}
              py={matches ? 12 : 6}
            >
              {/* {username} */}
              {address}
              <Box width="full" maxWidth={matches ? 64 : 52}>
                {status === WalletStatus.Disconnected ? (
                  <ConnectWalletButton onClickConnectBtn={onClickConnect} />
                ) : (
                  <ConnectWalletButton onClickConnectBtn={onClickOpenView} />
                )}
              </Box>
            </Stack>
          </GridItem>
          {status === WalletStatus.Connected && (
            <GridItem item xs={12} display={"flex"} justifyContent={"center"}>
              <Box className="flex justify-between items-center w-full max-w-lg">
                <Typography paddingRight={"5rem"}>Tokens:</Typography>
                {/* <Typography>{balance}</Typography> */}
              </Box>
            </GridItem>
          )}
        </Grid>
      </Container>
    </Center>
  );
};

export default WalletConnection;

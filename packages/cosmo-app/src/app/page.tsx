"use client";
import WalletConnection from "@/componets/wallet/Wallet";
import { CHAIN_NAME } from "@/config";
import { useChain } from "@cosmos-kit/react";
import { Container, Box, Typography, Link } from "@mui/material";
import NextLink from "next/link";
export default function Home() {
  const { connect } = useChain(CHAIN_NAME);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth={false} className="max-w-5xl py-10">
          <WalletConnection />
          <Link href="/connect" color="secondary" component={NextLink}>
            Go to the Connect page to see implementation from telescope without cosmos-kit
          </Link>
        </Container>
      </Box>
    </Container>
  );
}

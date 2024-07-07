"use client";
import React from "react";
import { Keplr, StdFee } from "@keplr-wallet/types";
import { Button } from "@mui/material";
import {
  osmosis,
  cosmos,
  getSigningCosmosClient,
  createRpcQueryHooks,
  useRpcClient,
} from "codegen";
import { SigningStargateClient } from "@cosmjs/stargate";
import { createRPCQueryClient } from "codegen/outputs/osmosis/rpc.query";
import { Divider } from "@interchain-ui/react";
import styled from "@emotion/styled";
import { Proposal } from "codegen/outputs/cosmos/gov/v1beta1/gov";

const Page = () => {
  const [balance, setBalance] = React.useState<null | number>(null);
  const [list, setList] = React.useState<null | Proposal[]>(null);
  const decoder = new TextDecoder();
  //getBalance be done by 2 differentways, createRPCQueryClient and getSigningCosmosClient
  //from nude code : getSigningCosmosClient is the second implementation from createRPCQueryClient
  //below code shows those 2 ways to get balance
  const getbalance = async () => {
    const keplr = (window as any).keplr as Keplr;
    const signer = keplr.getOfflineSigner("osmo-test-5");
    const account = (await signer.getAccounts())[0];

    const client = await createRPCQueryClient({
      rpcEndpoint: "https://rpc.testnet.osmosis.zone",
    });
    const client2 = await getSigningCosmosClient({
        rpcEndpoint: "https://rpc.testnet.osmosis.zone",
        signer: signer
    })
    const balance2 = await client2.getBalance(account.address,"uosmo")

    const balance = await client.cosmos.bank.v1beta1.allBalances({
      address: account.address,
    });
    console.log(balance)
    console.log(balance2)
    setBalance(parseInt(balance.balances[0].amount, 10) / 1000000);
  };

  //getProposals from client.cosmos.gov.v1beta1.proposals
  const getProposals = async () => {
    const keplr = (window as any).keplr as Keplr;
    const signer = keplr.getOfflineSigner("osmo-test-5");
    const account = (await signer.getAccounts())[0];
    const client = await createRPCQueryClient({
      rpcEndpoint: "https://rpc.osmosis.zone",
    });
    const proposals = await client.cosmos.gov.v1beta1.proposals({
      proposalStatus: 3,
      voter: "",
      depositor: ""
    });

    if(proposals.proposals.length === 0){return;}
    else{
        setList(proposals.proposals.slice(0,10));
    }
  };
  // I did a simple example to transfer coin to my self
  const sendTokenToMyself = async() => {
    async () => {
        const keplr = (window as any).keplr as Keplr;
        const signer = keplr.getOfflineSigner("osmo-test-5");
        const account = (await signer.getAccounts())[0];
        const stargateClient = await SigningStargateClient.connectWithSigner(
          "https://rpc.testnet.osmosis.zone",
          signer
        ); //getCosmosSigningClient
        const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

        const msg = send({
          amount: [
            {
              denom: "uosmo",
              amount: "1",
            },
          ],
          toAddress: account.address,
          fromAddress: account.address,
        });

        const fee: StdFee = {
          amount: [
            {
              denom: "uosmo",
              amount: "2000",
            },
          ],
          gas: "86364",
        };
        const response = await stargateClient.signAndBroadcast(
          account.address,
          [msg],
          fee
        );
        if(response.code === 0 ){
          alert("transfer succcuss to myself")
        }
      }
  }
  return (
    <div>
      <Button variant="contained"
        onClick={sendTokenToMyself}
      >
        Transfer 1 Uosmos TestNet Coin
      </Button>
      <div>
        <div>{balance === null ? "Please Query" : `Balance: ${balance} OSMO`} </div>
        <Button variant="contained"  onClick={getbalance}>
          Get Balance
        </Button>
      </div>
      <div className=" pt-5">
        <Button variant="contained" onClick={getProposals}>
          Get Proposals
        </Button>
      </div>
      
      <div className=" pt-5">
        <TableContainer>
          <TableRow>
            <HeaderCell>Proposal Id</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Content</HeaderCell>
          </TableRow>
          {list?.map((item)=>(
            <TableRow key={"prop" + item.proposalId}>
                <TableCell>{item.proposalId.toString()}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{decoder.decode(item.content?.value)}</TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

Page.propTypes = {};

export default Page;

const TableContainer = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableCell = styled.div`
  display: table-cell;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const HeaderCell = styled(TableCell)`
  background-color: #f2f2f2;
  font-weight: bold;
`;

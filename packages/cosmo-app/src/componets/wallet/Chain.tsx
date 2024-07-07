import { Chains } from '@chain-registry/types';
import {
    Avatar,
    Box,
    Combobox,
    Skeleton,
    Stack,
    Text,
    ThemeProvider,
    useTheme,
  } from '@interchain-ui/react';
export type ChainSelectProps = {
    chains: Chains;
    chainName?: string;
    onChange?: (chainName?: string) => void;
  };
  

export function ChainSelect({
    chainName,
    chains = [],
    onChange = () => {},
  }: ChainSelectProps) {
    return (
        <></>
    )
  }
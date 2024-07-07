import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { MouseEventHandler } from "react";

export interface ConnectWalletType {
    buttonText?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: any;
    onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
  }
const GradientButton = styled(Button)({
    width: '100%',
    minWidth: 'fit-content',
    size: 'large',
    backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
    color: 'white',
    opacity: 1,
    transition: 'all .5s ease-in-out',
    '&:hover': {
      backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
      opacity: 0.75,
    },
    '&:active': {
      backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
      opacity: 0.9,
    },
  });

  
export const ConnectWalletButton = ({
  buttonText,
  isLoading,
  isDisabled,
  icon,
  onClickConnectBtn,
}: ConnectWalletType) => {
  return (
    <GradientButton fullWidth disabled={isDisabled} onClick={onClickConnectBtn}>
      {buttonText || "Connect Wallet"}
    </GradientButton>
  );
};


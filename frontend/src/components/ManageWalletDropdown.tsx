import { useWallet } from "@solana/wallet-adapter-react";
import Button from "./ui/Button";
import { useModalOpenContext } from "../contexts/ModalOpenContext";
import { useWalletBalanceContext } from '../contexts/WalletBalanceContext';
import { useState } from 'react';

const ManageWalletDropdown = () => {
  const { publicKey } = useWallet();
  const connectedWallet = publicKey?.toBase58();
  const {
    setIsManageWalletDropdownVisible,
    setDepositModalVisible,
    setWithdrawModalVisible
  } = useModalOpenContext();
  const { walletBalance, refreshBalance } = useWalletBalanceContext();
  const [claimableAmount, setClaimableAmount] = useState(0);

  const handleDeposit = () => {
    setIsManageWalletDropdownVisible(false);
    setDepositModalVisible(true);
  };

  const handleWithdraw = () => {
    setIsManageWalletDropdownVisible(false);
    setWithdrawModalVisible(true);
  };

  const handleClaim = () => {
    console.log('Claiming amount:', claimableAmount);
    setClaimableAmount(0);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-[431px] bg-card-primary z-20 rounded-lg p-4 border border-card-stroke">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-primary">Manage Wallet</p>
            <img src="/src/assets/icons/power-off.png" alt="" className="w-5 h-5 cursor-pointer" onClick={() => setIsManageWalletDropdownVisible(false)} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center bg-card-secondary rounded-lg p-3 text-gray-secondary text-base">
              <p className="">Connected Wallet</p>
              <div className="flex items-center gap-2">
                {connectedWallet && (
                  <p>{`${connectedWallet.substring(0, 4)}...${connectedWallet.substring(connectedWallet.length - 4)}`}</p>
                )}
                <img src="/src/assets/icons/copy.png" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-card-secondary rounded-lg p-3">
              <div className="flex justify-between items-center text-gray-secondary text-base">
                <p>Balance</p>
                <p>${walletBalance.toFixed(2)}</p>
              </div>
              {/* <div className="flex justify-between items-center text-gray-secondary text-base">
                <p>Claimable Amount</p>
                <p>${claimableAmount.toFixed(2)}</p>
              </div> */}
              <div className="flex gap-2">
                <Button title="Claim" style="accent" onClick={handleClaim} />
                <Button title="Withdraw" style="dark" onClick={handleWithdraw} />
                <Button title="Deposit" style="accent" onClick={handleDeposit} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-bg bg-opacity-50 z-10"></div>
    </>
  );
};

export default ManageWalletDropdown;

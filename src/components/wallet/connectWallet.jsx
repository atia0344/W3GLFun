import { useState } from "react";
import { ethers } from "ethers";

export const useWallet = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  };

  return { account, connectWallet };
};

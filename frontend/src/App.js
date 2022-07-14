import "./App.css";
import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract, useSigner, useAccount } from "wagmi";
import { abi } from "./utils";
import { ethers } from 'ethers';

function App() {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const contract = useContract({
    addressOrName: "0xf8050100E81066580a3Bd5d676719E42119Fe4Fe",
    contractInterface: abi,
  });

  const mint = async (event) => {
    event.preventDefault();
    const amount = event.target[0].value;
    const tx = await contract.connect(signer).mint(address, ethers.utils.parseEther(amount.toString()),);
    const receipt = await tx.wait();
    console.log(receipt);
  };

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
        <ConnectButton />
      </MDBNavbar>

      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">
          The <em>Bubblegum</em> Faucet
        </h1>
        <h4 className="mb-3">Never run out of BBB &hearts;</h4>
        <form onSubmit={mint}>
          <input style={{ width: 200 }} type="number" id="amount" />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            role="button"
          >
            Mint my BBB!
          </button>
        </form>
      </div>
    </header>
  );
}

export default App;

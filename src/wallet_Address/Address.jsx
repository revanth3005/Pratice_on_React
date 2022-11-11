import React from "react";

const Address = () => {
  const walletAddress = "0x095aB34A52423507706a346B23684532A9BC97a5";
  const address =
    walletAddress.slice(0, 5) + "......" + walletAddress.slice(37, 45);

  return (
    <div>
      <h2>
        WalletAddress:{walletAddress} <br /> <br />
        Modified Address:{address}
      </h2>
    </div>
  );
};

export default Address;

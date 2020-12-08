import React from "react";

const CoinDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h1>{`CoinDetail page for coin id ${id}`}</h1>
    </div>
  );
};

export default CoinDetail;

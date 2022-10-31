import React from "react";

export default function Summary() {
  return (
    <>
      <div className="summary">
        <div className="summaryTag">Summary</div>
        <div className="row">
          <div className="column">
            <div className="capitalDes">Account Number</div>
            <div className="numbers">67238744</div>
          </div>
          <div className="column">
            <div className="capitalDes">Income</div>
            <div className="numbers">$20,00,00</div>
          </div>
          <div className="column">
            <div className="capitalDes">Spends</div>
            <div className="numbers">$11,00,000</div>
          </div>
        </div>
      </div>
    </>
  );
}

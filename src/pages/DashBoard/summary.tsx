import React from "react";

export default function Summary() {
  return (
    <>
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-details">
          <div className="summary-account-number">
            <p className="account-number-head">Account Number</p>
            <h3 className="account-number">67238744</h3>
          </div>

          <div className="summary-income">
            <p className="account-number-head income-spend">Income</p>
            <h3>$20,00,000</h3>
          </div>

          <div className="summary-spends">
            <p className="account-number-head income-spend">Spends</p>
            <h3>$11,00,000</h3>
          </div>
        </div>
      </div>
      {/* <div className="summary">
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
      </div> */}
    </>
  );
}

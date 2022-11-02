import React, { useState } from "react";
import Modal from "react-modal";
import { CloseIcon, DownloadIcon, Visibility } from "../../icons/Icons";
import hideIcon from "../../assets/file/hide_logo.svg";
import downloadIcon from "../../assets/file/download.svg";
import clsoeIcon from "../../assets/file/close.svg";
import "./index.css";

export default function Deatails() {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({
    transaction_ID: "",
    date: "",
    amount: 0,
    status: true,
  });

  function toggleModal(data: any): void {
    setisModalOpen(!isModalOpen);
    setModelData(data);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      boxShadow: "#000000",
      borderRadius: "12px",
      width: "480px",
      height: "390px",
    },
  };

  const transactionsData = [
    {
      transaction_ID: 2011002039115,
      date: "25-09-2021",
      amount: 1780,
      status: true,
    },
    {
      transaction_ID: 2011002039114,
      date: "19-09-2021",
      amount: 1890,
      status: true,
    },
    {
      transaction_ID: 2011002039113,
      date: "20-08-2021",
      amount: 5500,
      status: false,
    },
    {
      transaction_ID: 2011002039112,
      date: "12-07-2021",
      amount: 2590,
      status: true,
    },
    {
      transaction_ID: 2011002039111,
      date: "08-07-2021",
      amount: 2800,
      status: false,
    },
  ];

  return (
    <div className="details">
      {/* <h1>Details</h1> */}
      <div className="details-heading">
        <p>Transaction ID</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Action</p>
      </div>

      <div className="details-data">
        {transactionsData?.map((item: any) => (
          <>
            {/* {setModelData(item)} */}
            <div>
              <p>{item.transaction_ID}</p>
              <p>{item.date}</p>
              <p>{item.amount}</p>
              <p style={{ color: item.status ? "#008000" : "#ff0000" }}>
                {item.status ? "Approved" : "Rejected"}
              </p>
              <p className="details-action">
                <img
                  className="details-action-img1"
                  src={hideIcon}
                  alt="hidelogo"
                />
                <img
                  onClick={() => toggleModal(item)}
                  className="details-action-img2"
                  src={downloadIcon}
                  alt="download"
                />
              </p>
            </div>
          </>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Transaction Details Modal"
      >
        <div className="modal-header">
          <div className="transac-det">Transaction Details</div>
          <div className="close-button" onClick={toggleModal}>
            <img
              className="details-action-img2"
              src={clsoeIcon}
              alt="download"
            />
          </div>
        </div>
        <hr />
        <div className="modal-content">
          <div>
            <div className="transac-col">
              <div className="modal-sub-header">Transaction Id</div>
              <div className="modalDet">{modelData.transaction_ID}</div>
            </div>
            <div className="transac-col">
              <div className="modal-sub-header">Date</div>
              <div className="modal-det">{modelData?.date}</div>
            </div>
            <div className="transac-col">
              <div className="modal-sub-header">Status</div>
              <div
                className="modalDet"
                style={{ color: modelData?.status ? "#008000" : "#ff0000" }}
              >
                {modelData?.status ? "Approved" : "Rejected"}
              </div>
            </div>

            <div className="transac-col">
              <div className="modal-sub-header">Comment</div>
              <div className="modal-det">Against Invoice 100000868</div>
            </div>
          </div>
          <div>
            <div className="transac-col">
              <div className="modal-sub-header">Transfer To</div>
              <div className="modal-det">XYZ Corporation</div>
            </div>
            <div className="transac-col">
              <div className="modal-sub-header">Amount</div>
              <div className="modal-det">{modelData?.amount}</div>
            </div>

            <div className="transac-col">
              <div className="modal-sub-header">Action</div>
              <div>
                <img
                  className="details-action-img2"
                  src={downloadIcon}
                  alt="download"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

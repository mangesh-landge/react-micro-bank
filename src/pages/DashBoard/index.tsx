import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import AvailableService from "./availableService";
import CurrentService from "./currentService";
import Deatails from "./details";
import Summary from "./summary";
import { getAvailableServices } from "../../redux/availableServices/actionCreators";
import "./index.css";
import { getUserDetails } from "../../redux/dashboard/actionCreators";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { isAuth } = useSelector((state: any) => state?.login);
  const { token } = useSelector((state: any) => state?.login);
  const { userId } = useSelector((state: any) => state?.login);
  // const { token } = useSelector((state: any) => state?.signUp);
  // const { userId } = useSelector((state: any) => state?.signUp);
  const userDetails = useSelector(
    (state: any) => state?.login.data || state?.signUp.data
  );
  const dashboardUserDetails = useSelector((state: any) => state?.dashBoard);
  const { availableServices } = useSelector(
    (state: any) => state?.dashBoardAvailableServices
  );

  function getRemaingServices(a1: Array<any>, a2: Array<any>) {
    let array = a1;
    for (let i = 0; i < array?.length; i++) {
      let flag = false;
      for (let j = 0; j < a2.length; j++) {
        if (array[i].id == a2[j].id) {
          array.splice(i, 1);
          if (i == 0) flag = true;
        }
      }
      if (flag) i--;
    }
    return array;
  }

  const remainingServices = getRemaingServices(
    availableServices,
    userDetails?.currentServices
  );

  // console.log("DASHBORD_AUTH", isAuth);
  // console.log("DASHBORD_TOKEN", token);
  // console.log("DASHBORD_USERID", userId);
  // console.log("DASHBORD_DATA", userDetails);
  // console.log("DASHBORD_DATAS", userDetails?.currentServices);
  // console.log("DASBOAD_AVAILABLE_SERVICE", availableServices);
  console.log("USER_DETAILS", dashboardUserDetails);

  const [showSummary, setShowSummary] = useState(true);
  // const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    dispatch(getAvailableServices());
    dispatch(getUserDetails({ token, userId }));
  }, []);

  const handleToggle = (condition: boolean) => {
    setShowSummary(condition);
  };
  return (
    <div>
      <h1 className="dashboard-heading">Dashboard</h1>

      {/* Toggle menu */}
      <div className="toggle-bar">
        <div
          onClick={() => handleToggle(true)}
          className={showSummary ? "active" : "not-active"}
        >
          Summary
        </div>
        <div
          onClick={() => handleToggle(false)}
          className={!showSummary ? "active" : "not-active"}
        >
          Details
        </div>
      </div>

      {/* Summury */}
      {showSummary ? (
        <>
          <Summary />
          <div className="smallCont">
            <div className="services">Services </div>
            <div className="italicText">Micro Bank Services for you</div>
          </div>

          <div style={{ padding: "20px", border: "1px solid red" }}>
            <p>Current service</p>
            {userDetails?.currentServices?.map((service: any) => (
              <CurrentService key={service.id} service={service} />
            ))}
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid teal",
              marginTop: "20px",
            }}
          >
            <p>Available Services</p>
            {remainingServices?.map((service: any) => (
              // {availableServices?.map((service: any) => (
              <AvailableService key={service.id} service={service} />
            ))}
          </div>
        </>
      ) : (
        <Deatails />
      )}
      {/* copy right note */}
      <p className="copyright-note">© 2021 Micro Bank</p>
    </div>
    // <div className="mainCont">
    //   <h1 className="dashboard">Dashboard</h1>
    //   <div className="toggleBar">
    //     <div
    //       onClick={() => handleToggle(true)}
    //       className={showSummary ? "active" : "notActive"}
    //     >
    //       Summary
    //     </div>
    //     <div
    //       onClick={() => handleToggle(false)}
    //       className={!showSummary ? "active" : "notActive"}
    //     >
    //       Details
    //     </div>
    //   </div>
    //   {showSummary ? (
    //     <>
    //       <Summary />
    //       <div className="smallCont">
    //         <div className="services">Services </div>
    //         <div className="italicText">Micro Bank Services for you</div>
    //       </div>

    //       <div style={{ padding: "20px", border: "1px solid red" }}>
    //         <p>Current service</p>
    //         {userDetails?.currentServices?.map((service: any) => (
    //           <CurrentService key={service.id} service={service} />
    //         ))}
    //       </div>
    //       <div
    //         style={{
    //           padding: "20px",
    //           border: "1px solid teal",
    //           marginTop: "20px",
    //         }}
    //       >
    //         <p>Available Services</p>
    //         {remainingServices?.map((service: any) => (
    //           // {availableServices?.map((service: any) => (
    //           <AvailableService key={service.id} service={service} />
    //         ))}
    //       </div>
    //     </>
    //   ) : (
    //     <Deatails />
    //   )}
    //   <p>
    //     <span>&#169;</span> 2021 Micro Bank
    //   </p>
    // </div>
  );
}

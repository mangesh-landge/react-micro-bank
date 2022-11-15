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
import {
  getUserDetails,
  patchUserData,
} from "../../redux/dashboard/actionCreators";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Navbar from "../../components/navBar";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { isAuth } = useSelector((state: any) => state?.login);
  const { token } = useSelector((state: any) => state?.login);
  const { userId } = useSelector((state: any) => state?.login);
  // const { token } = useSelector((state: any) => state?.signUp);
  // const { userId } = useSelector((state: any) => state?.signUp);
  const userDetails = useSelector((state: any) => state?.login.data);
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
  // console.log("USER_DETAILS", dashboardUserDetails);

  const [showSummary, setShowSummary] = useState(true);
  // const [userData, setUserData] = useState<any>([]);
  const [editedService, setEditedService] = useState<any>();
  const [editedUserDetails, setEditedUserDetails] = useState<any>();
  useEffect(() => {
    dispatch(getAvailableServices());
    dispatch(getUserDetails({ token, userId }));
  }, []);

  useEffect(() => {
    if (editedService != undefined) {
      handleEditedServices(editedService);
      if (editedService) dispatch(patchUserData(editedUserDetails));
    }
  }, [editedService]);

  const handleToggle = (condition: boolean) => {
    setShowSummary(condition);
  };

  const handleEditedServices = (service: any) => {
    userDetails.currentServices = [
      ...userDetails?.currentServices?.filter(
        (item: any) => item.id != service.id
      ),
      service,
    ].sort((a, b) => a.id - b.id);
    return setEditedUserDetails(userDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="dashbord-body">
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
            <div className="small-cont">
              <div className="services">Services </div>
              <div className="italicText">Micro Bank Services for you</div>
            </div>

            <div className="current-services">
              <h2 className="service-head">Current Services</h2>
              {/* <DragDropContext onDragEnd={() => {}}>
              <div className="current-services-details">
                {userDetails?.currentServices?.map((service: any) => (
                  <Droppable droppableId="currentService">
                    {(provided) => (
                      <CurrentService
                        index={service.id}
                        key={service.id}
                        service={service}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      />
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext> */}
              <div className="current-services-details">
                {userDetails?.currentServices?.map((service: any) => (
                  <CurrentService
                    // onClick={handleRating(service, selectedStar)}
                    key={service.id}
                    service={service}
                    // selectedStar={selectedStar}
                    setEditedService={setEditedService}
                  />
                ))}
              </div>
            </div>
            <div className="available-services">
              <h2>Available Services</h2>
              <div className="available-services-details">
                {remainingServices?.map((service: any) => (
                  // <Droppable droppableId="availableService">
                  //   {(provided) => (
                  //     <AvailableService
                  //       index={service.id}
                  //       key={service.id}
                  //       service={service}
                  //       ref={provided.innerRef}
                  //       {...provided.droppableProps}
                  //     />
                  //   )}
                  // </Droppable>
                  <AvailableService key={service.id} service={service} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <Deatails />
        )}
      </div>
      {/* copy right note */}
      <p className="copyright-note">© 2021 Micro Bank</p>
    </div>
  );
}

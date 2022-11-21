import React, { useEffect, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import starIcon from "../../assets/file/star.svg";
import greenStarIcon from "../../assets/file/greenStar.svg";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function CurrentService({ service, setEditedService }: any) {
  const isMobile = useIsMobile(600);
  const [selectedStar, setSelectedStar] = useState<number>(0);
  const imgPathReader = (imgName: string) => {
    return require(`../../assets/${imgName}`);
  };
  useEffect(() => {
    handleRating(service, selectedStar);
  }, [selectedStar]);

  const handleRating = (service: any, givenStar: number) => {
    service.rating = givenStar;
    setSelectedStar(givenStar);
    return setEditedService(service);
  };
  return (
    <div className="current-sub-service">
      <img
        className={isMobile ? "mobile-logo" : "desk-logo"}
        src={imgPathReader(isMobile ? service?.mIcon : service?.dIcon)}
        alt="logo"
      />
      <p>{service.header}</p>
      {/* <!-- rating --> */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((el: number) => {
          if (el <= service.rating) {
            return (
              <img
                id="starClick"
                className="star-with-baground"
                key={el}
                src={greenStarIcon}
                alt="star"
                onClick={() => handleRating(service, el)}
              />
            );
          } else {
            return (
              <img
                id="starClick"
                key={el}
                onClick={() => handleRating(service, el)}
                src={starIcon}
                alt="star"
              />
            );
          }
        })}
      </div>
    </div>

    // <Draggable draggableId={service?.service.id.toString()} index={index}>
    //   {(provided) => (
    //     <div
    //       className="current-sub-service"
    //       {...provided.draggableProps}
    //       {...provided.dragHandleProps}
    //       ref={provided.innerRef}
    //     >
    //       <img
    //         className={isMobile ? "mobile-logo" : "desk-logo"}
    //         src={imgPathReader(
    //           isMobile ? service?.service.mIcon : service?.service.dIcon
    //         )}
    //         alt="logo"
    //       />
    //       <p>{service?.service.header}</p>
    //       {/* <!-- rating --> */}
    //       <div className="stars">
    //         {[1, 2, 3, 4, 5].map((el: number) => {
    //           if (el <= service?.service.rating) {
    //             return (
    //               <img
    //                 className="star-with-baground"
    //                 key={el}
    //                 src={greenStarIcon}
    //                 alt="star"
    //               />
    //             );
    //           } else {
    //             return <img key={el} src={starIcon} alt="star" />;
    //           }
    //         })}
    //       </div>
    //     </div>
    //   )}
    // </Draggable>
  );
}

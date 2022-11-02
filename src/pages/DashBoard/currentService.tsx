import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import starIcon from "../../assets/file/star.svg";
import greenStarIcon from "../../assets/file/greenStar.svg";

export default function CurrentService(service: any) {
  const isMobile = useIsMobile(600);
  const imgPathReader = (imgName: string) => {
    return require(`../../assets/${imgName}`);
  };
  return (
    <div className="current-sub-service">
      <img
        className={isMobile ? "mobile-logo" : "desk-logo"}
        src={imgPathReader(
          isMobile ? service?.service.mIcon : service?.service.dIcon
        )}
        alt="logo"
      />
      <p>{service?.service.header}</p>
      {/* <!-- rating --> */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((el: number) => {
          if (el <= service?.service.rating) {
            return (
              <img
                className="star-with-baground"
                key={el}
                src={greenStarIcon}
                alt="star"
              />
            );
          } else {
            return <img key={el} src={starIcon} alt="star" />;
          }
        })}
      </div>
    </div>
  );
}

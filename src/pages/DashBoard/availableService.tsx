import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

export default function AvailableService(service: any) {
  const isMobile = useIsMobile(600);
  const imgPathReader = (imgName: string) => {
    return require(`../../assets/${imgName}`);
  };

  return (
    <div className="available-sub-service">
      <img
        className={isMobile ? "mobile-logo" : "desk-logo"}
        src={imgPathReader(
          isMobile ? service?.service?.mIcon : service?.service?.dIcon
        )}
        alt="logo"
      />
      <p>{service?.service.header}</p>
    </div>
  );
}

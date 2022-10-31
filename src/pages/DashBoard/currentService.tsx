import React from "react";

export default function CurrentService(service: any) {
  return (
    <>
      <div>{service?.service.header}</div>
    </>
  );
}

import React from "react";
import SearchBar from "../SearchBar/index";
import Agent from "./Agent";

const data = [
    {
      id: "id1",
      avatar: "UE",
      agentStatus: "100%",
      business_name: "Hyginuss",
      marn_number: "3546747488",
      rating: "5",
      status: "Verified",
      agentlocation: " Sydney NSW Australia",
      installment: true,
      freeconsult: true,
      servicefees: "$2000 - $3500",
    },
    {
      id: "id1",
      avatar: "UE",
      agentStatus: "100%",
      business_name: "Somename1",
      marn_number: "3546747488",
      rating: "5",
      status: "Verified",
      agentlocation: " Sydney NSW Australia",
      installment: true,
      freeconsult: true,
      servicefees: "$2000 - $3500",
    },
    {
      id: "id1",
      avatar: "UE",
      agentStatus: "100%",
      business_name: "Somename1",
      marn_number: "3546747488",
      rating: "5",
      status: "Verified",
      agentlocation: " Sydney NSW Australia",
      installment: true,
      freeconsult: true,
      servicefees: "$2000 - $3500",
    },
    {
      id: "id1",
      avatar: "UE",
      agentStatus: "100%",
      business_name: "Somename1",
      marn_number: "3546747488",
      rating: "5",
      status: "Verified",
      agentlocation: " Sydney NSW Australia",
      installment: true,
      freeconsult: true,
      servicefees: "$2000 - $3500",
    },
  ],
  Index = (props) => {
    return (
      <>
        <SearchBar />
        {data.map((item, i) => (
          <Agent
            key={i}
            id={item.id}
            agentStatus={item.agentStatus}
            business_name={item.business_name}
            marn_number={item.marn_number}
            rating={item.rating}
            status={item.status}
            agentlocation={item.agentlocation}
            freeconsult={item.freeconsult}
            servicefees={item.servicefees}
            //installment={item.installment}
          />
        ))}
      </>
    );
  };

export default Index;

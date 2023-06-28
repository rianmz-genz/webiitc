import React from "react";

const DashboardCard = ({ children, className = "w-11/12" }) => {
  return (
    <section className={`${className} rounded-md mx-auto bg-white px-6 py-3`}>
      {children}
    </section>
  );
};

export default DashboardCard;

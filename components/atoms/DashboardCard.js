import React from "react";

const DashboardCard = ({ children }) => {
  return (
    <section className="w-11/12 rounded-md mx-auto bg-white px-6 py-3">
      {children}
    </section>
  );
};

export default DashboardCard;

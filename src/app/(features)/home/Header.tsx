import React from "react";
import Icons from "@/app/components/Icons";
import Button from "@/app/components/Button";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const dayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentDate);

  return (
    <div className="wrapper flex justify-between items-center py-4 bg-[#F8F8F8] box-shadow-1">
      <div className="flex items-center gap-3">
        <div
          onClick={toggleSidebar}
          className="font-bold text-gray-700 md:hidden"
        >
          {Icons.menu}
        </div>
        <div>
          <p className="text-3xl font-bold">
            <span className="text-primary_color">TO</span>
            <span className="text-secondary_color">DO</span>
          </p>
        </div>
      </div>
      <div className="w-2/3 border-2 rounded-full border-gray-200 flex items-center">
        <input
          type="text"
          placeholder="search your task here..."
          className="w-full px-4 py-2 rounded-full text-gray-700 focus:outline-none"
        />
        <div className="me-2">
          <Button
            icon={Icons.search}
            color="btn-primary"
            type="icon-only"
            rounded="btn-rounded"
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <Button
          icon={Icons.notification}
          color="btn-primary"
          type="icon-only"
        />
        <Button icon={Icons.calender} color="btn-primary" type="icon-only" />
        <div className="flex flex-col items-center">
          <p className="text-gray-600 font-semibold">{dayName}</p>
          <p className="text-gray-600">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

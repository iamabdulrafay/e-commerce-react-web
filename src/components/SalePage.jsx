import React from "react";

const SalePage = () => {
  return (
    <div className="w-screen text-center py-[10vw] text-black  flex items-center justify-center flex-col">
      <h1 className=" text-black text-[5vw] font-thin capitalize leading-[0]">
        our sale is
      </h1>
      <br />
      <h1 className=" text-black text-[5vw] capitalize font-thin  line-clamp-4">
        {" "}
        Almost ended
      </h1>
      <div className="w-[7vw] bg-orange-700 rounded-[2vw] flex items-center justify-center mx-0 h-[0.5vw]"></div>
    </div>
  );
};

export default SalePage;

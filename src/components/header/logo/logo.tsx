import { memo } from "react";

const Logo = () => {
  return (
    <div className="text-lg md:text-2xl font-extrabold cursor-pointer">
      <a href="#">Abdulaziz</a>
    </div>
  );
};

export default memo(Logo);

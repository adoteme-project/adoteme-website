const IconStep = ({ icon, nameStep, active }) => {
  return (
    <div className="flex flex-col gap-3 flex-[0.2] justify-center items-center">
      <div className={"h-12 w-12 !rounded-full flex justify-center items-center bg-branco"}>
        {icon}
      </div>
      <span className={`${
          active ? "font-bold" : "font-light"
        } text-lg`}> {nameStep} </span>
    </div>
  );
};

export default IconStep;

const IconStep = ({ icon, nameStep, active }) => {
  return (
    <div className="flex flex-col gap-3 flex-[0.2] justify-center items-center">
      <div
        className={`${
          active ? "bg-verde-border" : "bg-branco"
        } h-12 w-12 !rounded-full flex justify-center items-center`}
      >
        {icon}
      </div>
      <span className="font-bold text-lg"> {nameStep} </span>
    </div>
  );
};

export default IconStep;

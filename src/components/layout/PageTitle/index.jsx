const PageTitle = ({ title, children }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="text-3xl text-amarelo font-bold"> {title} </h2>
      <div className="flex gap-8">
        {children}
      </div>
    </div>
  );
};

export default PageTitle;
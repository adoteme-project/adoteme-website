const PageTitle = ( {title, actionName, onClick} ) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="text-3xl text-amarelo font-bold"> {title} </h2>
      {actionName && (
        <button className="px-3 py-2 rounded-lg bg-azul-main" onClick={onClick}>
          {actionName}
        </button>
      )}
    </div>
  );
};

export default PageTitle;
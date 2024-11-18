const SearchLayout = ({numberResults, registerName, children }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <h3 className="font-semibold text-xl ">
                {`${numberResults} ${registerName} encontrados`}
            </h3>
            <div className="flex gap-4">
                {children}
            </div>
        </div>
    )
}

export default SearchLayout;
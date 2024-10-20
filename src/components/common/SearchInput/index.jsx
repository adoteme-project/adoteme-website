import { useState } from "react";

export const SearchInput = ({ data, placeholder, name, disabled, error, onSearch,filterKey,className}) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filteredItems = data.filter((item) => 
        item[filterKey].toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredItems);
  };

  return (
    <>
      <div>
        <input
          className={`mt-1 w-full ${className} ${
            disabled && `bg-input-d`
          } rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm`}
          placeholder={placeholder ?? ""}
          onChange={handleInputChange}
        />
        {error?.[name]?.message && (
          <p className="text-vermelho">{error[name].message}</p>
        )}
      </div>
    </>
  );
};

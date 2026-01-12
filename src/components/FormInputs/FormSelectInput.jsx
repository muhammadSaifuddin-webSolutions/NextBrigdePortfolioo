
import AddNewButton from "./AddNewButton";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

export default function FormSelectInput({
  options,
  label,
  option,
  setOption,
  href,
  toolTipText,
  labelShown = true,
  isSearchable = true,
  isMultiple = false,
  disabled = false
}) {
  return (
    <div className="">
       {labelShown && (
        <h2 className="pb-2 block text-sm font-medium leading-6 text-gray-900">
          Select {label && label}
        </h2>
      )}
      <div className="flex items-center space-x-2">
        <Select
          isSearchable={isSearchable}
          classNames={"p-5"}
          primaryColor="blue"
          value={option}
          onChange={(item) => setOption(item)}
          options={options}
          placeholder={label}
          isDisabled={disabled}
          isMultiple={isMultiple}
          
        />
        {href && toolTipText && (
          <AddNewButton toolTipText={toolTipText} href={href} />
        )}
      </div>
    </div>
  );
}

import AddNewButton from "./AddNewButton";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

export default function FormMultipleSelectInput({
  options,
  label,
  option,
  setOption,
  href,
  toolTipText,
  labelShown = true,
  isSearchable = true,
  isMultiple = false,
}) {
  return (
    <div className="">
      {labelShown && (
        <h2 className="pb-2 block text-sm font-medium leading-6 text-gray-900">
          Select {label}
        </h2>
      )}
      <div className="flex items-center space-x-2">
        <Select
          isSearchable={isSearchable}
          primaryColor="blue"
          value={option}
          onChange={(item) => setOption(item)}
          options={options}
          placeholder={label}
          isMultiple
        />
        {href && toolTipText && (
          <AddNewButton toolTipText={toolTipText} href={href} />
        )}
      </div>
    </div>
  );
}

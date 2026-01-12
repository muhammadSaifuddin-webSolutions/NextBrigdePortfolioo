import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X, Upload, FileImage } from "lucide-react";
import React, { useState, useRef } from "react";
export default function FileInput({
  label,
  name,
  accept = "image/*",
  onChange,
  value = [],
  className = "",
  placeholder = "Choose files...",
  maxFiles = 5, // default max 5 files
}) {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    const validFiles = [];

    for (const file of files) {
      const maxSize = 400 * 1024;
      if (file.size > maxSize) {
        alert(`${file.name} is larger than 400KB and was skipped.`);
        continue;
      }
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} is not an image and was skipped.`);
        continue;
      }
      validFiles.push(file);
    }

    if (maxFiles && value.length + validFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} file(s).`);
      return;
    }

    onChange([...value, ...validFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files || []);
    const validFiles= [];

    for (const file of droppedFiles) {
      const maxSize = 400 * 1024;
      if (file.size > maxSize) {
        alert(`${file.name} is larger than 400KB and was skipped.`);
        continue;
      }
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} is not an image and was skipped.`);
        continue;
      }
      validFiles.push(file);
    }

    if (maxFiles && value.length + validFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} file(s).`);
      return;
    }

    onChange([...value, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = value.filter((_, i) => i !== index);
    onChange(updatedFiles);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </Label>

      <div
        className={`relative border-2 border-dashed rounded-lg p-3 transition-colors cursor-pointer ${
          dragOver
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
            : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={name}
          name={name}
          accept={accept}
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        {value.length === 0 ? (
          <div className="flex items-center justify-center space-x-2">
            <Upload className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          </div>
        ) : (
          <div className="space-y-2">
            {value.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300"
              >
                <div className="flex items-center space-x-2 overflow-hidden">
                  <FileImage className="h-4 w-4 text-green-600 shrink-0" />
                  <span
                    title={file.name}
                    className="text-sm max-w-[160px] truncate overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500 shrink-0">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFile(index)}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {value.length > 0 && (
        <div className="text-xs text-gray-500">
          {value.length} file{value.length > 1 ? "s" : ""} selected.
        </div>
      )}
    </div>
  );
}

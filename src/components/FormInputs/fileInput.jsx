import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X, Upload, FileImage } from "lucide-react";
import React from "react";
import { useState, useRef } from "react";

export default function FileInput({
  label,
  name,
  accept = "image/*",
  onChange,
  value,
  className = "",
  placeholder = "Choose file...",
}) {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      const maxSize = 400 * 1024; // 400KB in bytes
      if (file.size > maxSize) {
        alert("Please select an image smaller than 400KB.");
        return;
      }

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          onChange(file);
        }
      };
    }
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
    event.preventDefault()
    setDragOver(false)
    const file = event.dataTransfer.files?.[0] || null
    if (file && file.type.startsWith("image/")) {
      onChange(file)
      if (fileInputRef.current) {
        // Create a new FileList with the dropped file
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(file)
        fileInputRef.current.files = dataTransfer.files
      }
    }
  };

  const handleRemoveFile = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
        className={`relative border-2 border-dashed rounded-lg p-3 transition-colors ${
          dragOver
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
            : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={name}
          name={name}
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />

        {value ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 overflow-hidden">
              <FileImage className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                {value.name}
              </span>
              <span className="text-xs text-gray-500">
                ({(value.size / 1024).toFixed(1)} KB)
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div
            className="flex items-center justify-center space-x-2 cursor-pointer"
            onClick={handleButtonClick}
          >
            <Upload className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          </div>
        )}
      </div>

      {value && (
        <div className="text-xs text-gray-500">
          File selected: {value.name} ({(value.size / 1024 / 1024).toFixed(2)}{" "}
          MB)
        </div>
      )}
    </div>
  );
}

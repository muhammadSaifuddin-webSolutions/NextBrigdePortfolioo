import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

export default function LocalImageInput({
  title,
  imageUrl,
  setImageUrl,
  setImageFile, // New prop
  endpoint, // Not used but kept for compatibility
  className,
  size = "lg",
}) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setUploading(false);
      return;
    }

    setUploading(true);

    const reader = new FileReader();
    const maxSize = 400 * 1024; // 400KB in bytes


    if (file.size > maxSize) {
      alert("Please select an image smaller than 400KB.");
      setUploading(false);
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      setUploading(false);
      return;
    }

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {

        // Create a preview URL for display
        const previewUrl = URL.createObjectURL(file);
        setImageUrl(previewUrl);

        // Set the actual file to be sent with form data
        setImageFile(file);

        setUploading(false);
      }
    };
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

    const file = event.dataTransfer.files?.[0] || null;

    if (file && file.type.startsWith("image/")) {
      const maxSize = 400 * 1024; // 400KB in bytes

      if (file.size > maxSize) {
        alert("Please select an image smaller than 400KB.");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          // Create a preview URL for display
          const previewUrl = URL.createObjectURL(file);
          setImageUrl(previewUrl);

          // Set the actual file to be sent with form data
          setImageFile(file);

          if (fileInputRef.current) {
            // Create a new FileList with the dropped file
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInputRef.current.files = dataTransfer.files;
          }
        }
      };
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (size === "sm") {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div
              className={`relative border-2 border-dashed rounded-lg transition-colors ${
                dragOver
                  ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
                  : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {imageUrl !== ""  ? (
                <div className="relative">
                  <img
                    alt={title}
                    className={cn(
                      "h-20 w-full rounded-md object-cover",
                      className
                    )}
                    height="500"
                    src={imageUrl}
                    width="500"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <div
                  className="p-4 text-center cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {uploading
                      ? "Processing..."
                      : "Click to upload or drag & drop"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Max 400KB
                  </p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {!uploading &&
              (imageUrl === "/images/student.png" ||
                imageUrl === "/images/document.png") && (
                <Button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={uploading}
                  className="col-span-full bg-transparent"
                  variant="outline"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div
            className={`relative border-2 border-dashed rounded-lg transition-colors ${
              dragOver
                ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {imageUrl !== ""  ? (
              <div className="relative">
                <img
                  alt={title}
                  className={cn(
                    "h-40 w-full rounded-md object-cover",
                    className
                  )}
                  height="500"
                  src={imageUrl}
                  width="500"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div
                className="py-8 text-center cursor-pointer"
                onClick={handleButtonClick}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {uploading
                    ? "Processing..."
                    : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Max 400KB
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {!uploading &&
            (imageUrl === "/images/student.png" ||
              imageUrl === "/images/document.png") && (
              <Button
                type="button"
                onClick={handleButtonClick}
                disabled={uploading}
                className="col-span-full bg-transparent"
                variant="outline"
              >
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                  </>
                )}
              </Button>
            )}
        </div>
      </CardContent>
    </Card>
  );
}

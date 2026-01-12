import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React from "react";

export default function MultipleImageInput({
  title,
  imageUrls,
  setImageUrls,
  endpoint,
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={title}
            className="h-40 w-full rounded-md object-cover"
            height="300"
            src={imageUrls[0]}
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.map((imageUrl, i) => {
              return (
                <div key={i}>
                  <img
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={imageUrl}
                    width="84"
                  />
                </div>
              );
            })}
          </div>
          <UploadButton
            className="col-span-full"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              setImageUrls(res.map((item) => item.url));
            }}
            onUploadError={(error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

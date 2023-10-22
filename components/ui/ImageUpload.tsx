"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value: string[];
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  disabled,
  onChange,
  onRemove,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true) }, []);

  const onUpload = (result: any) => { onChange(result.info.secure_url) };

  if (!isMounted) return null;

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map(url => (
          <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden" key={url}>
            <div className="z-10 absolute top-2 right-2">
              <Button type="button" variant="destructive" size="sm" onClick={() => onRemove(url)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      
      <CldUploadWidget onUpload={onUpload} uploadPreset="ecommerce">

        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button type="button" variant="secondary" disabled={disabled} onClick={onClick}>
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}

      </CldUploadWidget>
    </div>
  );
};
export default ImageUpload;
"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Camera, Upload } from "lucide-react";
import { Button } from "./ui/button";
import {useDropzone} from 'react-dropzone'
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [searchterm, setsearchterm] = useState("");
  const [isimagesearchactive,setisimagesearchactive] = useState(false);
  const[imagepreview,setimagepreview] = useState("");
  const[searchimage,setsearchimage] = useState(null);
  const[isuploading,setisuploading] = useState(false);


  const onDrop = (acceptedFiles) => {
  const file = acceptedFiles[0];

  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setisuploading(true);
    setsearchimage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setimagepreview(reader.result);
      setisuploading(false);
      toast.success("Image uploaded successfully");
    };
    reader.onerror = () => {
      setisuploading(false);
      toast.error("Failed to read the image");
    };

    reader.readAsDataURL(file);
  }
};

  const router = useRouter();

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    });
  const handleTextSubmit = async(e) => {
  e.preventDefault();
    if(!searchterm.trim()){
      toast.error("Please enter a search term");
      return;
    }
    router.push(`/cars?search=${encodeURIComponent(searchterm)}`)
  };
  const handleimagesearch = async(e) => {
    e.preventDefault();
    if(!searchimage){
      toast.error("Please upload an image first");
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center ">
          <Input
            type="text"
            placeholder="Enter model, brand, or drag and drop..."
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
            className="pl-15 pr-15 py-6 w-full rounded-full border border-gray-300 bg-white/95 backdrop-blur-sm text-black"
          />
        

          <div className="absolute right-[100px]">
            <Camera
            size={36}
            onClick={()=>setisimagesearchactive(!isimagesearchactive)}
            className={`cursor-pointer rounded-xl p-2 z-10 transition-colors ${
              isimagesearchactive
                ? "bg-black text-white"
                : "bg-gray-400 text-black"
            }`}
            
            />
          </div>
          <Button type="submit" className="absolute right-2 rounded-full z-10">
            Search
          </Button>
        </div>
      </form>

      {isimagesearchactive && (
        <div className="mt-4">
          <form onSubmit={handleimagesearch}>
            <div className="border-2 border-solid broder-gray-300 rounded-3xl p-6">
              {imagepreview ? (
                <div className="flex flex-col items-center">
                  <img
                    src={imagepreview}
                    alt="preview"
                    className="w-40 h-40 object-cover rounded-lg mb-4 border"
                  />
                   <Button
                    variant="outline"
                    onClick={() => {
                      setsearchimage(null);
                      setimagepreview("");
                      toast.info("Image removed");
                    }}
                    className="text-black hover:text-[#E43636] cursor-pointer"
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-[#243547] rounded-lg p-6 text-center cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <Upload className="h-14 w-14 text-gray-400 mb-2 mx-auto" />
                  {isDragActive && !isDragReject ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>Drag 'n' drop an image here, or click to select</p>
                  )}
                  {isDragReject && (
                    <p className="text-red-500 mb-2">Invalid image</p>
                  )}
                  <p className="text-gray-500 text-sm">
                    Supports: JPG, PNG (max 5MB)
                  </p>
                </div>
              )}
            </div>

            {imagepreview && (
              <Button
                type="submit"
                className="w-full mt-3"
                disabled={isuploading }
              >
                {isuploading
                  ? "Uploading..."
                  : "Search with this Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

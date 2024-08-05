"use client"

import { useEffect, useState } from "react";
import {CldUploadButton} from 'next-cloudinary'
import Image from "next/image";

interface ImageUploadProps{
    value: string | undefined;
    onChange: (src: string)=>void;
    disabled?: boolean
};

export const ImageUpload= ({
    value,
    onChange,
    disabled
}: ImageUploadProps)=>{
    
    const [isMounted, setIsMounted]= useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    const handleUpload = (result: any) => {
        // console.log("Upload result:", result); // Log the upload result
        // console.log("Upload result info:", result.info); 
        const url = result.info?.secure_url;
        if (url) {
        //   console.log(url);
          onChange(url);
        } else {
          console.error("Upload did not return a secure URL:", result);
        }
    };

    return (
        <div className="space-y-4 w-full flex flex-col justify-center items-center">
            <CldUploadButton
                onUpload={handleUpload}
                options={{
                    maxFiles:1
                }}
                uploadPreset="q5ijttzb"
            >
                <div 
                    className="p-4 border-4 border-dashed border-primary/10 
                    rounded-lg hover: opacity-75 transition flex flex-col 
                    space-y-2 items-center justify-center "
                >
                    <div className="relative h-40 w-40">
                        <Image 
                            fill 
                            alt="" 
                            src={value || '/placeholder.svg'} 
                            className="rounded-lg object-cover"
                        />
                    </div>upload
                </div>
            </CldUploadButton>
        </div>
    )
}
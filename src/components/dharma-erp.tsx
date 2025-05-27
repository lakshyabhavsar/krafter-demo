"use client"
import React from "react";
import Image from "next/image";


const DharmaERP = () => {
  return (
    <section className="w-full max-w-[1440px] bg-[#353935] mx-auto">
      <div className="p my-30">
      <h2 className="text-3xl font-bold text-center ">Our Products</h2>
      </div>
      
      <div className="max-w-[1200px] mt-30 mx-auto px-4 ">
        <div className="flex justify-center items-center">
          <Image
            src="/images/home/dharmaErp.png"
            alt="Dharma ERP"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DharmaERP;

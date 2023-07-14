import { Button } from "@/components";
import FileInput from "@/components/atoms/FilePond";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React, { useState } from "react";

const Payment = () => {
  const [image, setImage] = useState(null);
  return (
    <div className="w-full max-w-[500px] mx-auto py-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start space-x-3">
          <img
            src="/images/buaya.png"
            alt="Buaya"
            width={1080}
            height={1080}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <Text size={"smalltitle"} color={"black"}>
              Nama
            </Text>
            <Text>Email</Text>
          </div>
        </div>
        <div className=" text-green-500">Pembayaran</div>
      </div>

      <div className="bg-orange-500 px-6 py-3 my-6 rounded-2xl shadow-xl">
        <Text size={"smalltitle"} weight={"bold"} color={"white"}>
          Web Design
        </Text>
        <div className="flex space-x-2 my-1">
          <Text color={"white"}>Tanggal: </Text>
          <Text color={"white"} weight={"bold"}>
            12 Juni
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text color={"white"} weight={"bold"}>
            HTM
          </Text>
          <Text size={"smalltitle"} weight={"bold"} color={"white"}>
            RP.15.000
          </Text>
        </div>
      </div>

      <div className="mb-6">
        <Text color={"black"} weight={"bold"}>
          Item Detail
        </Text>
        <Text>Pembayaran Lomba</Text>
      </div>

      <div className="py-6 border-y">
        <Text color={"black"} weight={"bold"}>
          Metode Pembayaran
        </Text>
      </div>

      <ul className="space-y-6 my-6">
        {paymentMethods.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <Image
              src={item.img}
              alt={item.value}
              width={1080}
              height={1080}
              className="w-28"
            />
            <Text>{item.value}</Text>
          </li>
        ))}
      </ul>
      <FileInput
        placeholder="Upload bukti pembayaran"
        className="bg-slate-200"
        image={image}
        setImage={setImage}
      />

      <Button isSquare additionals={"w-full"} size={"md"} color={"oren"}>
        Kirim Bukti Pembayaran
      </Button>
      <Button
        isSquare
        additionals={"w-full mt-4"}
        size={"md"}
        color={"outlinedark"}
      >
        Batal
      </Button>
    </div>
  );
};

export default Payment;

const paymentMethods = [
  {
    img: "/images/dana.png",
    value: "088812718721",
  },
  {
    img: "/images/mandiri.png",
    value: "12345-12170-1281",
  },
];

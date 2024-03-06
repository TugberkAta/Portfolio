"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <>
      <embed
        className=" w-full h-screen"
        src="https://drive.google.com/file/d/14Ahu47dTE54lTagEJTLvor2m6k5T8QeY/preview?usp=sharing"
        type=""
      />
    </>
  );
}

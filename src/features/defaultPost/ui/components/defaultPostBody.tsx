import Quote from "@/components/shared/quote";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DefaultPostBody({ image }: { image: string }) {
  return (
    <div>
      <p className="mb-[25px] text-[#333333] text-[17px] leading-[1.55]!">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
        leo et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum
        faucibus, pharetra et libero. Vestibulum viverra molestie nunc. Sed quis
        aliquet leo. In vel posuere tortor. Donec eros turpis, dictum vel
        vehicula viverra, facilisis in mauris.{" "}
        <Link href="/">
          <b className="hover:text-[#6d62ff] underline transition-colors duration-300">
            Nullam rhoncus enim ligula,
          </b>
        </Link>{" "}
        sit amet suscipit turpis dignissim non. Proin consequat purus sit amet
        blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin
        dignissim erat laoreet interdum. Phasellus magna velit, consectetur
        iaculis tincidunt placerat, semper non sem. Mauris in eleifend libero.
      </p>
      <ul className="mb-[25px] text-[#333333] text-[17px] leading-[1.55]! list-disc pl-10">
        <li className="">Praesent id aliquam eros, in semper est.</li>
        <li>Donec facilisis leo et bibendum pretium.</li>
        <li>Ut ac ultrices lectus, id volutpat nisi.</li>
        <li>Proin consequat purus sit amet blandit sollicitudin.</li>
      </ul>
      <h2 className="mb-25px text[24px] font-[700] leading-[1.2]!">
        The Power of Blogger Editor
      </h2>
      <p className="mb-[25px] text-[#333333] text-[17px] leading-[1.55]!">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
        leo et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum
        faucibus, pharetra et libero. Vestibulum viverra molestie nunc. Sed quis
        aliquet leo. In vel posuere tortor. Donec eros turpis, dictum vel
        vehicula viverra, facilisis in mauris. Nullam rhoncus enim ligula, sit
        amet suscipit turpis dignissim non. Proin consequat purus sit amet
        blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin
        dignissim erat laoreet interdum. Phasellus magna velit, consectetur
        iaculis tincidunt placerat, semper non sem. Mauris in eleifend libero.
      </p>
      <blockquote className="mb-[25px] ">
        <Quote>
          Proin consequat purus sit amet blandit sollicitudin. Aliquam in
          consequat libero. Morbi sollicitudin dignissim erat laoreet interdum.
          Phasellus magna velit, consectetur iaculis tincidunt placerat, semper
          non sem.
        </Quote>
      </blockquote>
      <p className="mb-[25px] text-[#333333] text-[17px] leading-[1.55]!">
        <i>
          <u>Morbi sollicitudin dignissim erat laoreet interdum.</u>
          Sed quis aliquet leo. In vel posuere tortor. Donec eros turpis, dictum
          vel vehicula viverra, facilisis in mauris. Nullam rhoncus enim ligula,
          sit amet suscipit turpis dignissim non. Proin consequat purus sit amet
          blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin
          dignissim erat laoreet interdum.
        </i>
      </p>
      <p className="mb-[25px]">
        <b>Aliquam in consequat libero. Morbi sollicitudin</b>
        In vel posuere tortor. Donec eros turpis, dictum vel vehicula viverra,
        facilisis in mauris. Nullam rhoncus enim ligula, sit amet suscipit
        turpis dignissim non. Proin consequat purus sit amet blandit
        sollicitudin. Aliquam in consequat libero. Proin consequat purus sit
        amet blandit sollicitudin.{" "}
        <span className="bg-[#b5838d] text-white">
          Nullam rhoncus enim ligula, sit amet suscipit turpis
        </span>{" "}
        Phasellus magna velit, consectetur iaculis tincidunt placerat, semper
        non sem. Mauris in eleifend libero.
      </p>
      <Image
        src={image}
        alt="post image"
        width={647}
        height={427}
        className="mx-auto"
      />
      <p className="text-center text-[12px] p-[5px] ">
        Image by{" "}
        <b className="hover:text-[#6d62ff] transition-colors duration-300 ease-in-out cursor-pointer">
          Freepik
        </b>
      </p>
      <p>
        Proin consequat purus sit amet blandit sollicitudin. Aliquam in
        consequat libero. Morbi sollicitudin dignissim erat laoreet interdum.
        Phasellus magna velit, consectetur iaculis tincidunt placerat, semper
        non sem. Mauris in eleifend libero. Mauris vitae nibh sed felis aliquet
        dictum sed egestas mauris. Sed varius est ac nulla eleifend sagittis.
        Praesent id aliquam eros, in semper est. Maecenas ex enim, ornare ac
        auctor sit amet, interdum et justo. Aenean pellentesque magna ut nibh
        lobortis, sit amet vulputate sem tristique. Ut ac ultrices lectus, id
        volutpat nisi. Aenean ipsum augue, mollis at sodales mollis, varius eu
        erat.
      </p>
    </div>
  );
}

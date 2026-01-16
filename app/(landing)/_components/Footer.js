import React from "react";
import Image from "next/image";
import Socials from "./Socials";

import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-gray-100 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-md/relaxed text-gray-500">
            © &nbsp; <span className="text-duis text-shadow">DUIS</span>{" "}
            community 2024.
            <br />
            <span className="underline decoration-duis">
              {"All cutes reserved for duis's dawgs."}
            </span>
          </p>
          <p className="text-black mt-4 px-3 text-base sm:text-lg md:text-2xl opacity-30 break-words">
            {contractAddress}
          </p>
        </div>
      </div>
      <div class="overflow-hidden relative h-24">
        <img className="absolute bottom-0 w-full" src="grass.svg" alt="grass" />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="flex">
            <div>
              <Image
                className=""
                src="/collection/1.png"
                width={200}
                height={200}
                alt="dui 1"
              />
            </div>
            <div>
              <Image
                className=""
                src="/collection/2.png"
                width={200}
                height={200}
                alt="dui 2"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                className=""
                src="/collection/4.png"
                width={200}
                height={200}
                alt="dui 4"
              />
            </div>
            <div>
              <Image
                className=""
                src="/collection/3.png"
                width={200}
                height={200}
                alt="dui 3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

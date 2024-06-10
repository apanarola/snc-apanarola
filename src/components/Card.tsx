import { User } from "@/utils/common/person";
import Image from "next/image";
import React from "react";

type CardProps = {
  user?: User;
};

const Card = ({ user }: CardProps) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:shadow-lg">
      <div className="flex flex-col items-center sm:w-80">
        <div
          className="flex items-center justify-center w-full bg-gray-800 object-contain h-28 rounded-lg rounded-b-none "
          style={{
            backgroundImage: `url(${user?.backgroundImageUrl ?? ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Image
            className="w-20 h-20 rounded-full shadow-lg object-cover z-10 drop-shadow-lg mb-[-80px]"
            src={user?.profilePictureUrl ?? ""}
            alt="Bonnie image"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col items-center py-5 px-1 w-full mt-1">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user?.title}
          </span>
          <div className="flex mt-4 md:mt-6 gap-2 mx-auto">
            <div className="bg-green-400 hover:bg-green-600 text-white rounded-md px-3 py-2">{`followers : ${user?.followers}`}</div>
            <div className="bg-blue-400 hover:bg-blue-600 text-white rounded-md px-3 py-2">{`following : ${user?.following}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

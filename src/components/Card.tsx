import { User } from "@/utils/common/person";
import Image from "next/image";
import React from "react";

type CardProps = {
  user?: User;
};

const Card = ({ user }: CardProps) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center sm:w-96 py-4">
        <Image
          className="w-28 h-28 m-3 rounded-full shadow-lg object-cover"
          src={user?.profilePictureUrl ? `${user?.profilePictureUrl}` : ""}
          alt="Bonnie image"
          width={96}
          height={96}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.title}
        </span>
        <div className="flex mt-4 md:mt-6 gap-2 mx-auto">
          <div className="bg-green-500 text-white rounded-md px-3 py-2">{`followers : ${user?.followers}`}</div>
          <div className="bg-blue-500 text-white rounded-md px-3 py-2">{`following : ${user?.following}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

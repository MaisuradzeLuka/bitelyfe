import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <Image
      src="/profile-avatar.jpg"
      alt="avatar image"
      width={37}
      height={37}
      className="w-9 h-9 object-cover rounded-full"
    />
  );
};

export default Profile;

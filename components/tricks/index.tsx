import { log } from "console";
import React, { useState } from "react";

const Tricks = () => {
  const initialProfileState = {
    customer_id: "",
    full_name: "",
    birth_data: "",
    gender: "",
    email: "",
    bio: "",
    job: "",
    avatar: { path: "" },
    introduction: { path: "" },
  };

  const [profileInfo, setProfileInfo] = useState(initialProfileState);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setProfileInfo((state) => (state = { ...profileInfo, [name]: value }));
  };
  console.log(profileInfo.full_name);

  return (
    <div>
      <input
        name="full_name"
        type="text"
        onChange={handleInputChange}
        value={profileInfo.full_name}
      />
    </div>
  );
};

export default Tricks;

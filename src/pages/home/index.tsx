import React from "react";
import WideButton from "../../components/buttons/wideButton";
import { ButtonType } from "../../types/generals";
import { useAppSelector } from "../../redux/store";

const Home = () => {
  const name = useAppSelector((state) => state.auth.user.name);
  return (
    <div>
      <div>name:{name}</div>
      <WideButton
        onClick={() => {}}
        title="test"
        type={ButtonType.ActiveFilled}
        color="bg-red-500"
      ></WideButton>
    </div>
  );
};

export default Home;

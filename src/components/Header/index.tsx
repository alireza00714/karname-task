import { FC, useState } from "react";

interface Props {
  persianPageName: string;
}

const Header: FC<Props> = (props) => {
  const { persianPageName } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-between px-14 py-4 bg-white">
      <h1 className="font-extrabold text-4xl">{persianPageName}</h1>
      <button className="btn-primary flex items-center px-5 gap-2">
        <img src="/assets/icons/Plus.svg" alt="" />
        <span className="text-xs font-medium">سوال جدید</span>
      </button>
    </header>
  );
};

export default Header;

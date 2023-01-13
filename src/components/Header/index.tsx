import { FC, useState } from "react";
import ConfirmQuestionModal from "../ConfirmQuestionModal";

interface Props {
  persianPageName: string;
}

const Header: FC<Props> = (props) => {
  const { persianPageName } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="flex justify-between px-14 py-4 bg-white">
        <h1 className="font-extrabold text-4xl">{persianPageName}</h1>
        <button
          className="btn-primary flex items-center px-5 gap-2"
          onClick={() => setShowModal(true)}
        >
          <img src="/assets/icons/Plus.svg" alt="" />
          <span className="text-xs font-medium">سوال جدید</span>
        </button>
      </header>

      <ConfirmQuestionModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;

import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, FC, Fragment, SetStateAction, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

const ConfirmQuestionModal: FC<Props> = (props) => {
  const { showModal, setShowModal } = props;

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-graylightest text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="flex flex-col gap-0">
                  <div className="flex items-center justify-between bg-white shadow-sm px-6 py-3 mb-[1.125rem]">
                    <h3 className="text-base font-extrabold">
                      ایجاد سوال جدید
                    </h3>
                    <XMarkIcon
                      width="1.25rem"
                      cursor="pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 px-6 mb-3.5">
                    <label htmlFor="subject">موضوع</label>
                    <input
                      type="text"
                      className="w-full text-sm font-normal py-3 px-4 rounded-md border border-solid border-graylight focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 px-6 mb-6">
                    <label htmlFor="subject">متن سوال</label>
                    <textarea
                      className="w-full text-sm font-normal py-3 px-4 rounded-md border border-solid border-graylight resize-none focus:outline-none"
                      rows={6}
                    />
                  </div>
                  <div className="flex justify-end px-6 gap-4 mb-6">
                    <button
                      className="btn-ghost px-5 text-primary text-xs"
                      onClick={() => setShowModal(false)}
                    >
                      انصراف
                    </button>
                    <button className="btn-primary px-5 text-xs">
                      ایجاد سوال
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ConfirmQuestionModal;

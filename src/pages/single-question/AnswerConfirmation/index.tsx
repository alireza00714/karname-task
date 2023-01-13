const AnswerConfirmation = () => {
  return (
    <div className="flex flex-col gap-[1.125rem]">
      <h2 className="text-2xl font-extrabold">پاسخ خود را ثبت کنید</h2>
      <div className="flex flex-col gap-2.5">
        <label className="text-graydarker" htmlFor="answerBox">
          پاسخ خود را بنویسید
        </label>
        <div className="w-full">
          <textarea
            name="answerBox"
            id="answerBox"
            placeholder="متن پاسخ..."
            className="py-3 px-4 text-sm border border-solid border-graylight focus:outline-none rounded-md h-40 resize-none w-full"
          ></textarea>
          <p className="text-[#F16063] text-[0.625rem] font-normal mr-4">
            محل قرارگیری متن خطا
          </p>
        </div>
        <button className="btn-primary mt-4 w-48">ارسال پاسخ</button>
      </div>
    </div>
  );
};

export default AnswerConfirmation;

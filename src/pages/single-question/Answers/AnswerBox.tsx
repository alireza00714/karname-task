const AnswerBox = () => {
  return (
    <div className="flex flex-col rounded-lg bg-graylightest shadow-md relative">
      <div className="flex justify-between items-center px-4 py-4 rounded-lg bg-white shadow-sm relative left-0 right-0 top-0 z-[1]">
        <span className="flex gap-4">
          <img src="/assets/images/person.png" alt="" />
          <h3 className="pt-1 text-base font-bold">علی کیا</h3>
        </span>
        <span className="flex gap-16">
          <span className="flex gap-3">
            <span className="flex items-center gap-1">
              <span className="text-graydark text-sm font-normal">ساعت :</span>
              <span className="text-black font-bold">16:48</span>
            </span>
            <span className="w-px bg-black bg-opacity-10"></span>
            <span className="flex items-center gap-1">
              <span className="text-graydark text-sm font-normal">تاریخ :</span>
              <span className="text-black font-bold">16:48</span>
            </span>
          </span>
          <span className="flex gap-8">
            <span className="flex items-center gap-1">
              <img src="/assets/icons/Happy.svg" alt="" />
              <span className="text-graydark">20</span>
            </span>
            <span className="flex items-center gap-1">
              <img src="/assets/icons/Sad.svg" alt="" />
              <span className="text-graydark">20</span>
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 bg-graylightest px-4 py-4 rounded-b-lg">
        <span>
          سلام من میخوام یه authentication ساده تو react بسازم اما این error رو
          بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که
          ببینید دقیقا چه مشکلی وجود داره
        </span>
        <span className="flex justify-end gap-3">
          <button className="flex items-center gap-2 rounded-md border border-[#E4E9EC] px-2.5 py-2">
            <img src="/assets/icons/Happy.svg" alt="" />
            <span className="text-sm font-bold text-[#66CB9F]">
              پاسخ خوب بود
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-md border border-[#E4E9EC] px-2.5 py-2">
            <img src="/assets/icons/Sad.svg" alt="" />
            <span className="text-sm font-bold text-[#F16063]">
              پاسخ خوب نبود
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default AnswerBox;

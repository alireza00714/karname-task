const DetailedQuestionBox = () => {
  return (
    <div className="flex flex-col rounded-lg bg-graylightest shadow-md relative">
      <div className="flex justify-between items-center px-4 py-4 rounded-lg bg-white shadow-sm relative left-0 right-0 top-0 z-[1]">
        <span className="flex gap-4">
          <img src="/assets/images/person.png" alt="" />
          <h3 className="pt-1 text-base font-bold">مشکل در Auth در React</h3>
        </span>
        <span className="flex gap-5">
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
          <span className="flex items-center gap-1">
            <img src="/assets/icons/Comment.svg" alt="" />
            <span className="text-graydark">20</span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 bg-graylightest px-4 py-4 rounded-b-lg">
        <span>
          سلام من میخوام یه authentication ساده تو react بسازم اما این error رو
          بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که
          ببینید دقیقا چه مشکلی وجود داره
        </span>
        <span>سلام این بخش جزئیات سوال هستش</span>
      </div>
    </div>
  );
};

export default DetailedQuestionBox;

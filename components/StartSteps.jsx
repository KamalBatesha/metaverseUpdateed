const StartSteps = ({ number, text }) => {
  return (
    <div className="  flex-row flexCenter">
      <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] text-white">
        <p className=" font-bold text-[20px]">{`0${number}`}</p>
      </div>
      <p className=" flex-1 text-[18px] font-normal leading-[32px] ml-[30px] text-[#b0b0b0]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;

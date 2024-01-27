const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex-col sm:w-[250px] min-w-[210px] justify-start">
      <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
        <img src={imgUrl} alt={title} className="object-contain w-1/2 h-1/2" />
      </div>
      <h2 className=" mt-[26px] text-[24px] leading-[30px] text-white font-bold">
        {title}
      </h2>
      <p className=" mt-[16px] text-[18px] flex-1 text-[#b0b0b0] leading-7 font-normal">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;

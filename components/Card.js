const Card = ({ amount, text, className }) => {
    return (
      <button className={`h-[145px] w-[166px] bg-[#E2F5ED] border border-[#08B783] text-[#5A5A5A] rounded-md p-2 ${className}`}>
        <div className="text-3xl">{amount}</div>
        <div className="mt-5">{text}</div>
      </button>
    );
  };
  
  export default Card;
  
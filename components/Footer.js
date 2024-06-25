import SVG from "./SVG";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 text-sm">
      <div className="flex justify-around py-4">
        <SVG svg="/house.svg" text="Home" />
        <SVG svg="/heart.svg" text="Favourite" />
        <div className="flex flex-col justify-center items-center -ml-2">
          <div
            className="absolute -top-10 w-20 h-20 bg-[#08B783] flex justify-center items-center"
            style={{
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            }}
          >
            <img src="/wallet.svg" alt="Home" className="w-6 h-6" />
          </div>
          <div className="text-[#08B783] mt-8">Wallet</div>
        </div>
        <SVG svg="/discount.svg" text="Offer" />
        <SVG svg="/user.svg" text="Profile" />
      </div>
    </div>
  );
};

export default Footer;

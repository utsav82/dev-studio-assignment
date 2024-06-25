import Link from "next/link";

const Header = ({ backLink, title }) => {
  return (
    <div className=" flex justify-center w-full">
      <Link href={backLink} className="absolute left-5">
        {" "}
        {"< Back"}
      </Link>
      {title && <div className="text-lg">{title}</div>}
    </div>
  );
};

export default Header;

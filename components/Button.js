import Link from "next/link";

const Button = ({ href, text, className }) => {
    return (
      <Link href={href} className={`flex-1 h-[56px] py-2 px-4 flex justify-center items-center ${className}`}>
        {text}
      </Link>
    );
  };
  
  export default Button;
  
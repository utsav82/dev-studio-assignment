import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="px-5 relative h-[100svh] flex flex-col items-center justify-around">
      <div className="absolute top-0 right-0 m-8 text-sm text-[#414141]">
        Skip
      </div>

      <div className="flex flex-col items-center gap-5 mt-5">
        <Image src={"hero.svg"} height={100} width={100} className="w-[400px]" />
        <div className="flex flex-col items-center gap-3 m-5 p-5">
          <h1 className="text-[24px]">Anywhere you are</h1>
          <div className="text-sm font-medium text-center text-font-secondary">
            Sell houses easily with the help of Listenoryx and to make this line big
            <p>I am writing more.</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-[86px] h-[86px]">
        <div className="absolute w-full h-full rounded-full bg-gray-200"></div>
        <div
          className="absolute w-full h-full rounded-full"
          style={{ background: "conic-gradient(#08b783 0% 35%, transparent 35% 100%)" }}
        />
        <div className="relative flex items-center justify-center w-[76px] h-[76px] rounded-full bg-white z-10">
          <Link href={"/profile"} className="relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#08B783] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

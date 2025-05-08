import Image from "next/image";

//Images
import homeFrame from "@/public/home-frame.png";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 mx-auto px-[25px] xl:px-0">
                <div className="flex flex-col order-2 md:order-1">
                    <div>
                        <p className="hidden md:block text-[16px] tracking-[5%] text-[#1E1E1E] uppercase font-medium mb-6">Your
                            go-to platform for 3D printing files</p>
                        <h1 className="text-4xl font-bold md:text-5xl text-[#1E1E1E]">Discover
                            what’s possible with 3D printing</h1>
                        <p className="text-lg tracking-normal text-[#1E1E1E] font-normal my-6">Join
                            our community of creators and explore a vast library of user-submitted models.</p>
                    </div>
                    <Link href={'/models'}
                       className="w-max text-[20px] font-medium uppercase text-[#000000] border-[2px] border-[#000000]
                                      transition duration-100 bg-#ffffff hover:bg-black hover:text-[#ffffff] px-6 py-3">Browse
                        models</Link>
                </div>
                <div className="w-[350px] order-1 md:order-2">
                    <Image className="w-full" src={homeFrame} alt="Home Frame Image"/>
                </div>
            </div>
        </>
    );
}

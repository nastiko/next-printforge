export default function Home() {
    return (
        <>
            <div className="container grid grid-cols-2 grid-rows-2 gap-4 mx-auto px-[25px] xl:px-0">
                <div>
                    <h6 className="hidden md:block text-[16px] tracking-[5%] text-[#1E1E1E] font-albert uppercase font-medium">Your go-to platform for 3D printing files</h6>
                    <h1 className="text-[40px] md:text-[56px] tracking-normal text-[#1E1E1E] font-semibold font-montserrat">Discover what’s possible with 3D printing</h1>
                    <p className="text-[24px] md:text-[28px] tracking-normal text-[#1E1E1E] font-normal font-albert">Join our community of creators and explore a vast library of user-submitted models.</p>
                </div>
                <div className="col-start-1 row-start-2">
                    <button></button>
                </div>
                <div className="row-span-2 col-start-2 row-start-1">
                    <img src="public/home-frame.png" alt="Home Frame Image" />
                </div>
            </div>
        </>
    );
}

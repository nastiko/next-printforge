export default function About() {
    return (
        <>
            <section className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-2 gap-x-16 px-[25px] xl:px-0 mx-auto">
                <div className="w-full">
                    <img className="w-full xl:w-[627px] xl:h-[627px] object-cover" src="/about-frame.png" alt="About Frame Image"/>
                </div>
                <div>
                    <h6 className="text-[14px] md:text-[20px] text-[#1E1E1E] font-normal tracking-[5%] uppercase mb-6">About printforge</h6>
                    <h1 className="text-4xl font-bold md:text-5xl text-[#1E1E1E] font-montserrat">Empowering makers worldwide</h1>
                    <p className="text-lg tracking-normal text-[#1E1E1E] font-normal font-albert my-6">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="text-lg tracking-normal text-[#1E1E1E] font-normal font-albert my-6">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing..</p>
                </div>

            </section>
        </>
    )
}
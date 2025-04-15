import Image from "next/image";

//Images
import aboutFrame from "@/public/about-frame.png"

export default function About() {
    return (
        <>
            <section className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-2 gap-x-16 px-[25px] xl:px-0 mx-auto">
                <div className="w-full">
                    <Image className="object-cover" src={aboutFrame} width={627} height={627} alt="About Frame Image"/>
                </div>
                <div>
                    <p className="text-[14px] md:text-[20px] text-[#1E1E1E] font-normal tracking-[5%] uppercase mb-6">About
                        printforge</p>
                    <h1 className="text-4xl font-bold md:text-5xl text-[#1E1E1E]">Empowering makers
                        worldwide</h1>
                    <p className="text-lg tracking-normal text-[#1E1E1E] font-normal my-6">Founded in 2023,
                        PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and
                        professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="text-lg tracking-normal text-[#1E1E1E] font-normal my-6">Our mission is to
                        foster a vibrant community where creativity meets technology, enabling anyone to bring their
                        ideas to life through 3D printing..</p>
                </div>
            </section>
            <div className="border-[1px] border-[#DDDDDD] my-8"></div>
            <section className="max-w-7xl flex flex-col lg:flex-row gap-y-8 mx-auto px-[25px] xl:px-0">
                <div>
                    <div className="flex items-center gap-x-2">
                        <img className="w-[32px] h-[32px]" src="/models.svg" alt="Models icon"/>
                        <h6 className="text-[28px] text-[#1E1E1E] font-bold">100K+ Models</h6>
                    </div>
                    <p className="text-[20px] font-normal text-[#1E1E1E]">Access our vast library of
                        community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <div className="w-[1px] h-[123px] hidden lg:block border-[1px] border-[#DDDDDD] mx-8"></div>
                <div>
                    <div className="flex items-center gap-x-2">
                        <img className="w-[32px] h-[32px]" src="/community.svg" alt="Community icon"/>
                        <h6 className="text-[28px] text-[#1E1E1E] font-bold">Active Community</h6>
                    </div>
                    <p className="text-[20px] font-normal text-[#1E1E1E]">Join thousands of makers who
                        share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <div className="w-[1px] h-[123px] hidden lg:block border-[1px] border-[#DDDDDD] mx-8"></div>
                <div>
                    <div className="flex items-center gap-x-2">
                        <img className="w-[32px] h-[32px]" src="/flag.svg" alt="Flag icon"/>
                        <h6 className="text-[28px] text-[#1E1E1E] font-bold">Free to Use</h6>
                    </div>
                    <p className="text-[20px] font-normal text-[#1E1E1E]">Most models are free to download,
                        with optional premium features for power users.</p>
                </div>
            </section>
            <div className="border-[1px] border-[#DDDDDD] my-8"></div>
            <section className="max-w-7xl mx-auto px-[25px] xl:px-0">
                <h1 className="text-4xl font-bold md:text-5xl text-[#1E1E1E]">Our vision</h1>
                <p className="text-lg tracking-normal text-[#1E1E1E] font-normal my-6">At PrintForge, we
                    believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our
                    platform serves as a bridge between designers and makers, enabling the sharing of knowledge and
                    creativity that pushes the boundaries of what's possible with 3D printing.</p>
                <div className="w-[245px] border-[1px] border-[#DDDDDD] mx-auto my-8"></div>
                <p className="text-lg tracking-normal text-[#1E1E1E] font-normal my-6">Whether you're a
                    hobbyist looking for your next weekend project, an educator seeking teaching materials, or a
                    professional designer wanting to share your creations, PrintForge provides the tools and community
                    to support your journey in 3D printing.</p>
            </section>
        </>
    )
}
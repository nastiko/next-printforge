import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center px-[25px]">
            <h2 className="text-4xl font-bold md:text-5xl text-[#1E1E1E] text-center mb-4">There was a problem</h2>
            <p className="text-center">We could not find the page you were looking for.</p>
            <p className="text-center">Go back to the <Link className="font-semibold" href={"/"}>Home</Link></p>
        </div>
    )
}
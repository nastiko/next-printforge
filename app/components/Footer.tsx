export default function Footer() {
    const year:number = new Date().getFullYear();
    return (
        <>
            <footer className="h-[61px] flex w-full items-center justify-center px-[25px] py-3.5 mt-7">
                <p className="text-center text-[16px]">© {year} Anastasia Hrynkevich</p>
            </footer>
        </>
    )
}
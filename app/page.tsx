export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div>
                    <h6></h6>
                </div>
                <div className="col-start-1 row-start-2">2</div>
                <div className="row-span-2 col-start-2 row-start-1">3</div>
            </div>
        </>
    );
}

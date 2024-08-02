export function TitleCard({ about1, about2, about3 }) {
    return (
        <div className="flex flex-col w-full mt-1 pt-1">
            <div className="flex w-full">
                <div className="text-lg font-medium mb-1 overflow-hidden text-ellipsis whitespace-normal">
                    {about1}
                </div>
            </div>
            <div className="flex w-full">
                <div className="text-base font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
                    {about2}
                </div>
            </div>
            <div className="flex w-full">
                <div className="text-base font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
                    {about3}
                </div>
            </div>
        </div>
    );
}

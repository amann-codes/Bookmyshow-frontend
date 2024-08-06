export function TitleCard(prop) {
    return (
        <div className="flex flex-col w-full mt-1 pt-1">
            <div className="flex w-full">
                <div className="text-lg font-medium mb-1 overflow-hidden text-ellipsis whitespace-normal">
                    {prop.about1}
                </div>
            </div>
            <div className="flex w-full">
                <div className="text-base font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
                    {prop.about2}
                </div>
            </div>
            <div className="flex w-full">
                <div className="text-base font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
                    {prop.about3}
                </div>
            </div>
        </div>
    );
}

export function Filter(prop){
    return <div className="flex flex-wrap h-8 mt-2 mr-2 items-center border-[0.8px] border-[#5f5f5f] px-2">
        <a className="test-slate-600 text-base cursor-pointer">
            {prop.filter}
        </a>
    </div>
}
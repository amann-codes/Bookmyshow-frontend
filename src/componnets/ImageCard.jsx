export function ImageCard(prop) {
    return (
        <div className='rounded-md w-full h-[378px] bg-slate-300'>
            <img className='w-full h-full rounded-[inherit]' src={prop.src} alt={prop.alt} />
        </div>
    );
}

import { Link } from 'react-router-dom';
export function NavElement2({title, to}){
    return <div className='text-xs ps-2.5'>
        <Link className='cursor-pointer' to={to}>{title}</Link>
    </div>
}
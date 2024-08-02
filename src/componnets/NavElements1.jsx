import { Link } from 'react-router-dom';
export function NavElement1({title, to}){
    return <div className='text-sm pe-3'>
        <Link className='cursor-pointer' to={to}>{title}</Link>
    </div>
}
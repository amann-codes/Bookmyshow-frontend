import { Link } from 'react-router-dom';
export function NavElement1(prop){
    return <div className='text-sm pe-3'>
        <Link className='cursor-pointer' to={prop.to}>{prop.title}</Link>
    </div>
}
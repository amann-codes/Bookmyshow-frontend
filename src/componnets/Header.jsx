import { Logo } from './Logo';
import { SearchLink } from './SearchLink';
import { NaviBar } from './NaviBar';
export function Header(){
    return (
        <header className='bg-white'>
            <div className='h-16 max-w-[1240px] w-11/12 m-auto'>
              <div className='flex justify-between items-center h-full w-full'>
                <div className='flex justify-between items-center h-full w-full'>
                  <div className='flex justify-start items-center w-3/4'>
                    <Logo/>
                    <SearchLink/>
                  </div>
                  <div className='flex justify-end items-center h-full'>
                    <div className='hidden sm:flex items-center mr-8 cursor-pointer'>
                      <span className='text-sm font-normal pr-3.5'>Delhi-NCR</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.08786 6.08783C4.24407 5.93162 4.49734 5.93162 4.65355 6.08783L7.8707 9.30498L11.0879 6.08783C11.2441 5.93162 11.4973 5.93162 11.6535 6.08783C11.8098 6.24404 11.8098 6.4973 11.6535 6.65351L8.22426 10.0828C8.029 10.2781 7.71241 10.2781 7.51715 10.0828L4.08786 6.65351C3.93165 6.4973 3.93165 6.24404 4.08786 6.08783Z" fill="#1A1A1A"></path></svg>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className='bg-[#F84464] rounded text-center text-xs pt-1 align-middle w-[52px] h-[30px] sm:h-[30px] sm:w-[70px] leading-6 text-white cursor-pointer'>Sign in</div>
                        <div className='ml-2 sm:ml-6'><svg width="22px" height="14px" xmlns="http://www.w3.org/2000/svg"><title>Hamburger Menu</title><g fillRule="nonzero" stroke="#3B4261" strokwidth="1.5" fill="none" strokeLinecap="round"><path d="M1.611 1h20.614M1.611 7h20.614M1.611 13h20.614"></path></g></svg></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NaviBar />
        </header>
    )
}
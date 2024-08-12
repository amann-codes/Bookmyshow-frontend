export function SearchLink(prop) {
  return (
    <div className="sm:w-full max-w-full">
      <div className="hidden lg:flex justify-start items-center border rounded-sm border-x-[0.8px]">
        <svg
          className="my-2.5 mx-3"
          viewBox="0 0 12 12"
          height="13"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Search</title>
          <path
            d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z"
            fill="#777"
          ></path>
        </svg>
        <span className="text-[#999999] text-[14px] font-normal">
          {prop.placeholder}
        </span>
      </div>
      <div className="flex sm:hidden justify-start items-center rounded border-[0.8px] text-center pr-1 text-gray-400 mr-4">
        <svg
          className="flex sm:hidden items-center h-9 w-9 pt-2.5 pl-2"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/s vg"
        >
          <title>Search</title>
          <path
            d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z"
            fill="#777"
          ></path>
        </svg>
        <input
          type="text"
          placeholder={prop.placeholder}
          className="text-[#999999] text-[14px] font-normal focus:outline-none w-full"
        ></input>
      </div>
    </div>
  );
}

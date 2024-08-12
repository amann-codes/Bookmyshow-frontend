export function Signup(prop) {
  return (
    <div className="fixed flex flex-col inset-0 w-screen h-screen mx-auto my-auto backdrop-blur-sm bg-transparent rounded-md drop-shadow-lg">
      <div className="w-auto h-auto m-auto">
        <svg
          onClick={prop.close}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="sm:size-7 size-12 mx-auto mb-4 sm:mb-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div className="flex flex-col justify-center items-center px-12 bg-white border-gray-400 border-[0.5px] rounded-lg">
          <div>
            <div className="w-full text-center h-auto pt-3 mb-4">
              <div className="text-2xl text-gray-700 font-semibold">
                Get Started
              </div>
            </div>
            <div className="w-full text-center py-6">
              <div className="text-xl font-semibold text-gray-700">Signup</div>
            </div>
            <div className="w-full text-center pb-3">
              <div className="text-xs font-medium text-gray-400 text-ellipsis">
                Enter Credentials to create your account
              </div>
            </div>
            <div className="flex justify-start flex-col mt-3">
              <div className="text-base">Enter Username</div>
              <div>
                <input
                  type="text"
                  placeholder="eg. user567"
                  className="focus:outline-none w-full border-gray-400 rounded-md border-[0.8px] mt-1 text-stone-600 px-2 py-1"
                ></input>
              </div>
            </div>
            <div className="flex justify-start flex-col mt-3">
              <div className="text-base">Enter Password</div>
              <div>
                <input
                  type="password"
                  placeholder="eg. Pass@23"
                  className="focus:outline-none w-full border-gray-400 rounded-md border-[0.8px] mt-1 text-stone-600 px-2 py-1"
                ></input>
              </div>
            </div>
            <div className="w-full text-center border rounded-md bg-red-400 mb-3 mt-6">
              <button className=" text-white text-base py-1">Sign Up</button>
            </div>
            <div className="cursor-pointer underline w-full text-center pb-6">
              <div className="text-xs text-gray-600">
                Already Have an Account?Sign in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

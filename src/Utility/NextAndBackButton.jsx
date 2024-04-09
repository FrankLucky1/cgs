import React from 'react'

const NextAndBackButton = ({color}) => {
  return (
    <div className="flex items-center justify-center gap-3">
          <span className={`${color === "white" ? "border-white/20" : "border-black/20"} p-1 md:p-4 border rounded-full cursor-pointer`}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.23197 9.01493L11.4591 3.78777L10.2313 2.57227L2.92215 9.88138L10.2313 17.2029L11.4591 15.975L6.23197 10.7478H17.5527V9.01493L6.23197 9.01493Z"
                fill={color}
              />
            </svg>
          </span>
          <span className={`${color === "white" ? "border-white/20" : "border-black/20"} rotate-180 p-1 md:p-4 border rounded-full cursor-pointer`}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.23197 9.01493L11.4591 3.78777L10.2313 2.57227L2.92215 9.88138L10.2313 17.2029L11.4591 15.975L6.23197 10.7478H17.5527V9.01493L6.23197 9.01493Z"
                fill={color}
              />
            </svg>
          </span>
          {/* <span className="p-4 border border-black/20  ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.768 7.01493L6.54087 1.78777L7.76874 0.572266L15.0779 7.88138L7.76874 15.2029L6.54087 13.975L11.768 8.74783H0.447266V7.01493L11.768 7.01493Z"
                fill="black"
              />
            </svg>
          </span> */}
        </div>
  )
}

export default NextAndBackButton
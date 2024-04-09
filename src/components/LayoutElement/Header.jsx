import React from "react";
import Link from "next/link";
import Image from "next/image";

// import { Box, Title } from "@mantine/core";
import { logo } from "@/assets";

const Header = () => {
  const navLinks = [
    { id: 1, title: "Abount us" },
    { id: 2, title: "Services" },
    { id: 3, title: "News" },
    { id: 4, title: "Contact us" },
  ];
  return (
    <div className="w-full flex flex-col md:h-[119px] text-white">
      {/* first header */}
      <div className="flex bg-[#347566] h-[53px] items-center justify-between px-5 md:px-[50px] py-[15px]">
        <div className="flex  gap-6">
          <span className="flex gap-2 items-center justify-center max-sm:text-[10px] whitespace-nowrap text-[14px] font-[400]">
            {" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.94667V11.3041C12 11.6541 11.7294 11.9445 11.3803 11.9691C11.0887 11.9897 10.8509 12 10.6667 12C4.7756 12 0 7.2244 0 1.33333C0 1.14914 0.0103 0.911247 0.0309 0.619667C0.05558 0.270587 0.34596 0 0.695907 0H3.0534C3.22452 0 3.36784 0.129613 3.38502 0.299867C3.40045 0.452713 3.41479 0.575427 3.42805 0.668013C3.5629 1.60981 3.83835 2.50624 4.23247 3.33535C4.29573 3.46843 4.25447 3.62773 4.13457 3.71337L2.6957 4.7412C3.57168 6.7874 5.2126 8.42833 7.2588 9.30433L8.28473 7.86793C8.37147 7.7466 8.53267 7.70487 8.66733 7.7688C9.4964 8.1626 10.3927 8.43773 11.3344 8.57227C11.4264 8.58547 11.5483 8.59967 11.7001 8.615C11.8704 8.6322 12 8.77553 12 8.94667Z"
                fill="white"
              />
            </svg>
            (907) 555-0101
          </span>

          <span className="flex gap-2 items-center justify-center max-sm:text-[10px] whitespace-nowrap text-[14px] font-[400]">
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2427 10.5759L6 14.8185L1.75736 10.5759C-0.585787 8.23272 -0.585787 4.43376 1.75736 2.09061C4.10051 -0.252535 7.89947 -0.252535 10.2427 2.09061C12.5858 4.43376 12.5858 8.23272 10.2427 10.5759ZM6 7.66659C6.7364 7.66659 7.33333 7.06965 7.33333 6.33325C7.33333 5.59687 6.7364 4.99992 6 4.99992C5.2636 4.99992 4.66667 5.59687 4.66667 6.33325C4.66667 7.06965 5.2636 7.66659 6 7.66659Z"
                fill="white"
              />
            </svg>
            8502 Preston Rd. Inglewood, Maine 98380
          </span>
        </div>
        <div className="flex gap-3 max-sm:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25458 16.4944L5.97931 16.917C7.19006 17.623 8.56607 18 10.002 18C14.4203 18 18.002 14.4183 18.002 10C18.002 5.58172 14.4203 2 10.002 2C5.58367 2 2.00195 5.58172 2.00195 10C2.00195 11.4363 2.37918 12.8128 3.08563 14.0238L3.50801 14.7478L2.85452 17.1494L5.25458 16.4944ZM0.00613332 20L1.35809 15.0315C0.495913 13.5536 0.00195312 11.8345 0.00195312 10C0.00195312 4.47715 4.4791 0 10.002 0C15.5248 0 20.002 4.47715 20.002 10C20.002 15.5228 15.5248 20 10.002 20C8.16807 20 6.44948 19.5064 4.97183 18.6447L0.00613332 20ZM6.39329 5.30833C6.52717 5.29892 6.6615 5.29748 6.79556 5.30402C6.84972 5.30758 6.90362 5.31384 6.95756 5.32007C7.11682 5.33846 7.29195 5.43545 7.35083 5.56894C7.64915 6.24536 7.93861 6.92565 8.21917 7.60963C8.28107 7.76062 8.24377 7.95633 8.12597 8.1457C8.06617 8.2428 7.97225 8.379 7.86345 8.5183C7.75036 8.663 7.50696 8.9291 7.50696 8.9291C7.50696 8.9291 7.40835 9.0473 7.44552 9.1944C7.46 9.25 7.50618 9.331 7.54805 9.3991C7.57124 9.4368 7.59277 9.4705 7.60674 9.4938C7.86266 9.9211 8.20667 10.3543 8.62687 10.7616C8.74727 10.8783 8.86407 10.9974 8.98967 11.108C9.45797 11.5209 9.98777 11.8583 10.56 12.1082L10.5651 12.1105C10.6496 12.1469 10.693 12.1668 10.8167 12.2193C10.8791 12.2457 10.9429 12.2685 11.0084 12.2858C11.0321 12.292 11.0564 12.2955 11.0808 12.2972C11.2425 12.3069 11.336 12.2032 11.3759 12.1555C12.0994 11.279 12.1656 11.2218 12.1706 11.2222V11.2238C12.2657 11.1236 12.4152 11.0888 12.5486 11.097C12.6095 11.1007 12.6701 11.1124 12.7255 11.1377C13.2573 11.3803 14.1268 11.7587 14.1268 11.7587L14.7083 12.0201C14.8057 12.0671 14.8946 12.1778 14.8989 12.2854C14.9015 12.3523 14.9087 12.4603 14.8848 12.6579C14.8535 12.9166 14.7748 13.2281 14.6966 13.3913C14.6416 13.5058 14.5704 13.6074 14.4876 13.6934C14.3753 13.81 14.2919 13.8808 14.1569 13.9814C14.0747 14.0426 14.0321 14.0714 14.0321 14.0714C13.8932 14.159 13.8149 14.2028 13.6494 14.2909C13.392 14.428 13.1076 14.5068 12.8163 14.5218C12.6306 14.5313 12.4454 14.5447 12.2599 14.5347C12.2517 14.5342 11.6917 14.4482 11.6917 14.4482C10.2698 14.0742 8.95477 13.3736 7.85131 12.402C7.6257 12.2034 7.41647 11.9885 7.20291 11.7759C6.31385 10.8908 5.64079 9.9364 5.23266 9.0336C5.0314 8.5884 4.90396 8.1116 4.90195 7.62098C4.89826 7.01405 5.09696 6.4232 5.46666 5.94186C5.53954 5.84697 5.60871 5.74855 5.72806 5.63586C5.85445 5.51651 5.93489 5.45244 6.02154 5.40811C6.13704 5.34902 6.2639 5.31742 6.39329 5.30833Z"
              fill="white"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7C8.34262 7 7 8.3431 7 10C7 11.6573 8.34312 13 10 13C11.6573 13 13 11.6569 13 10C13 8.3427 11.6569 7 10 7ZM10 5C12.7604 5 15 7.2371 15 10C15 12.7605 12.7629 15 10 15C7.23953 15 5 12.7629 5 10C5 7.23953 7.2371 5 10 5ZM16.5 4.74915C16.5 5.43926 15.9392 5.99917 15.25 5.99917C14.5599 5.99917 14 5.4384 14 4.74915C14 4.0599 14.5607 3.5 15.25 3.5C15.9383 3.49913 16.5 4.0599 16.5 4.74915ZM10 2C7.52552 2 7.1222 2.00655 5.97129 2.0578C5.18717 2.09461 4.66155 2.20007 4.17318 2.38967C3.73918 2.55799 3.42611 2.75898 3.09254 3.09255C2.75769 3.4274 2.55706 3.73963 2.38942 4.17383C2.19938 4.66332 2.09395 5.18811 2.0578 5.97115C2.00605 7.0752 2 7.46105 2 10C2 12.4745 2.00655 12.8778 2.05779 14.0286C2.09462 14.8124 2.20022 15.3388 2.38936 15.826C2.55812 16.2606 2.75952 16.5744 3.09148 16.9064C3.42765 17.2421 3.74081 17.4434 4.17089 17.6094C4.66521 17.8005 5.1905 17.9061 5.97114 17.9422C7.0752 17.9939 7.46105 18 10 18C12.4745 18 12.8778 17.9934 14.0286 17.9422C14.8107 17.9055 15.3375 17.7996 15.826 17.6106C16.2594 17.4423 16.5742 17.2402 16.9064 16.9085C17.2426 16.5718 17.4435 16.2594 17.6097 15.8283C17.8003 15.3358 17.9061 14.8098 17.9422 14.0289C17.9939 12.9248 18 12.5389 18 10C18 7.52552 17.9934 7.12221 17.9422 5.97137C17.9054 5.18906 17.7995 4.66149 17.6103 4.17318C17.4424 3.74038 17.2407 3.42635 16.9074 3.09255C16.572 2.75715 16.2606 2.55693 15.8261 2.38942C15.337 2.19954 14.8114 2.09396 14.0288 2.05781C12.9248 2.00605 12.5389 2 10 2ZM10 0C12.7166 0 13.0558 0.00999994 14.1225 0.0599999C15.1866 0.10917 15.9125 0.2775 16.55 0.525C17.2091 0.77917 17.7658 1.1225 18.3216 1.67833C18.8766 2.23417 19.22 2.7925 19.475 3.45C19.7216 4.08667 19.89 4.81333 19.94 5.8775C19.9875 6.94417 20 7.28333 20 10C20 12.7167 19.99 13.0558 19.94 14.1225C19.8908 15.1867 19.7216 15.9125 19.475 16.55C19.2208 17.2092 18.8766 17.7658 18.3216 18.3217C17.7658 18.8767 17.2066 19.22 16.55 19.475C15.9125 19.7217 15.1866 19.89 14.1225 19.94C13.0558 19.9875 12.7166 20 10 20C7.28333 20 6.94416 19.99 5.8775 19.94C4.81333 19.8908 4.08833 19.7217 3.45 19.475C2.79166 19.2208 2.23416 18.8767 1.67833 18.3217C1.1225 17.7658 0.78 17.2067 0.525 16.55C0.2775 15.9125 0.11 15.1867 0.0600002 14.1225C0.0125002 13.0558 0 12.7167 0 10C0 7.28333 0.0100002 6.94417 0.0600002 5.8775C0.10916 4.8125 0.2775 4.0875 0.525 3.45C0.77916 2.79167 1.1225 2.23417 1.67833 1.67833C2.23416 1.1225 2.7925 0.78 3.45 0.525C4.0875 0.2775 4.8125 0.11 5.8775 0.0599999C6.94416 0.0124999 7.28333 0 10 0Z"
              fill="white"
            />
          </svg>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2048 0.25H20.5128L13.2858 8.51L21.7878 19.75H15.1308L9.9168 12.933L3.95084 19.75H0.640844L8.37084 10.915L0.214844 0.25H7.04084L11.7538 6.481L17.2048 0.25ZM16.0438 17.77H17.8768L6.04484 2.126H4.07784L16.0438 17.77Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* second header */}

      <div className="flex bg-[#fff] h-full items-center justify-between px-[20px] max-sm:py-2 md:px-[50px]">
        <div className="flex items-center justify-center h-full">
          <span className="md:pr-[60px] text-black">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Picture of the author"
              className="w-auto h-auto object-cover"
            />{" "}
          </span>

          <div className="text-[#403E5A] max-lg:hidden flex gap-[45px]">
            {navLinks.map((link) => (
              <Link
                href={`/${link.title}`}
                key={link.id}
                className="font-[700] text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center">
          <div className="flex max-lg:hidden items-center justify-center gap-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.9999 28.9999L24.6499 24.6499"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012V4.61012Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button className="text-base font-[700] text-[#fff] bg-[#F36C21] rounded-[25px] w-full px-10 py-[7px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

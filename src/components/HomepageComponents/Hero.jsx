"use client";
import { ac } from "@/assets";
import React, { useEffect, useState } from "react";

import Image from "next/image";

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const starNo = [1, 2, 3, 4, 5];

  useEffect(() => {
    const target = new Date("12/28/2024");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full min-h-screen md:max-h-screen items-center justify-center py-[21px] px-[15px] md:px-[44px] mb-10">
      <div className="relative bg-[#EFE9DF] rounded-2xl h-[819px] my-auto py-[65px] px-8 md:px-[44px] lg:px-[85px] text-[#4B5563]">
        <div className="flex flex-col gap-2 z-20">
          <p className="text-xs">
            Ends on Monday 29th of May 2024, 12:00 PM BST
          </p>
          <div className="flex gap-1">
            <span className="text-base font-semibold rounded-md bg-[#B2B2B233]/20 z-20 py-[5.5px] px-[10.5px]">
              {days} <span className="text-sm">DAYS</span>
            </span>{" "}
            :
            <span className="text-base font-semibold rounded-md bg-[#B2B2B233]/20 py-[5.5px] px-[10.5px]">
              {hours} <span className="text-sm">HOURS</span>
            </span>{" "}
            :
            <span className="text-base font-semibold rounded-md bg-[#B2B2B233]/20 py-[5.5px] px-[10.5px]">
              {minutes}
              <span className="text-sm">MIN</span>
            </span>
          </div>
        </div>
        <svg
          className="absolute z-10 right-0 top-5"
          width="1330"
          height="810"
          viewBox="0 0 1330 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1506.49 -234C1505.51 -225.378 1465.39 -70.2968 1426.31 39.0902C1383.95 157.634 1242.39 385.89 1089.72 324.028C898.874 246.7 915.921 136.875 981.255 93.4471C1046.59 50.0195 1188.23 121.384 1063.75 319.172C964.172 477.402 873.095 550.762 716.375 555.463C537.923 560.819 468.658 648.859 442.962 697.023C442.962 697.023 377.119 848.91 294.35 904.328C197.882 968.919 1.27181 954.116 1.27181 954.116"
            stroke="white"
            stroke-width="24"
          />
        </svg>
        <div className="absolute max-lg:hidden z-20 top-[30%] right-20">
          <Image
            src={ac}
            width={656}
            height={514}
            alt="Picture of the author"
            className="w-auto h-auto object-cover"
          />{" "}
        </div>
        <div className="relative flex flex-col items-start justify-start mt-12 md:mt-24 lg:mt-16">
          <span className="py-2 bg-[#FEDC32] rounded-lg text-[#000] z-[10] text-sm font-bold -rotate-[4deg] px-4 absolute -top-2">
            Up To 90% Off On PTAC’s
          </span>
          <h1 className="text-[54px] md:text-[77px] font-bold z-10 mb-4 ">PTAC Sale Now!</h1>
          <p className="text-2xl font-medium mb-8 z-20">
            Upgrade your cooling and save <br /> big on select PTAC units
          </p>
          <button className="text-base font-[700] text-[#fff] bg-[#F36C21] rounded-full px-10 py-[20px]">
            Shop now
          </button>
        </div>
        <div className="flex flex-col items-start text-[#403E5A] gap-[9px] justify-start mt-20">
          <div className="flex gap-4">
            {starNo.map((_, i) => (
              <span className="p-[0.5px]" key={i}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.4792L10.0417 9.70833L11.3125 13.625L7 10.4792ZM14 5.41667H8.64583L7 0.375L5.35417 5.41667H0L4.33333 8.54167L2.6875 13.5833L7.02083 10.4583L9.6875 8.54167L14 5.41667Z"
                    fill="#FFCC00"
                  />
                </svg>
              </span>
            ))}
          </div>
          <p className="text-base font-semibold">
            “We ordered PRAC AC to <br /> which turned out amazing! <br /> The
            quality was fantastic”
          </p>
          <p className="text-xs ">Mohamad Alkabbani</p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap py-5 lg:px-10 text-[#4B5563]">
        <span className="flex gap-5 items-center justify-center font-semibold lg:text-xl">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.75 29.2871V35.6396C35.749 36.3421 35.5687 37.0326 35.2261 37.6458C34.8835 38.2591 34.39 38.7747 33.7923 39.1437C33.1946 39.5128 32.5126 39.7231 31.8109 39.7548C31.1092 39.7864 30.411 39.6384 29.7825 39.3246L29.37 39.1184C29.1927 39.0387 29.0006 38.9975 28.8063 38.9975C28.6119 38.9975 28.4198 39.0387 28.2425 39.1184L23.54 41.0021C23.046 41.1777 22.5241 41.2616 22 41.2496C21.4776 41.2509 20.9596 41.1529 20.4738 40.9609L15.7575 39.0771C15.5802 38.9974 15.3881 38.9562 15.1938 38.9562C14.9994 38.9562 14.8073 38.9974 14.63 39.0771L14.2175 39.2834C13.5921 39.5956 12.8977 39.7438 12.1993 39.7141C11.501 39.6844 10.8216 39.4777 10.2251 39.1134C9.6285 38.7492 9.13428 38.2393 8.7888 37.6317C8.44333 37.024 8.25792 36.3386 8.25 35.6396V29.2871C9.06931 30.2714 9.99118 31.1657 11 31.9546C14.142 34.4076 18.0138 35.7401 22 35.7401C25.9862 35.7401 29.858 34.4076 33 31.9546C34.0088 31.1657 34.9307 30.2714 35.75 29.2871Z"
              fill="#4B5563"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 2.75C19.0086 2.75 16.0843 3.63707 13.597 5.29902C11.1097 6.96098 9.1711 9.32318 8.02633 12.0869C6.88155 14.8506 6.58203 17.8918 7.16563 20.8257C7.74923 23.7597 9.18975 26.4547 11.305 28.57C13.4203 30.6853 16.1153 32.1258 19.0493 32.7094C21.9832 33.293 25.0244 32.9935 27.7881 31.8487C30.5518 30.7039 32.914 28.7653 34.576 26.278C36.2379 23.7907 37.125 20.8664 37.125 17.875C37.125 13.8636 35.5315 10.0165 32.695 7.18001C29.8585 4.34352 26.0114 2.75 22 2.75ZM23.594 12.0331C23.0923 10.489 20.9077 10.489 20.406 12.0331L19.5872 14.5532C19.5123 14.7834 19.2979 14.9392 19.0558 14.9392L16.4061 14.9392C14.7824 14.9392 14.1074 17.0169 15.4209 17.9713L17.5646 19.5287C17.7604 19.671 17.8423 19.9231 17.7675 20.1534L16.9487 22.6734C16.447 24.2176 18.2144 25.5017 19.5279 24.5473L21.6716 22.9898C21.8674 22.8476 22.1326 22.8476 22.3284 22.9898L24.472 24.5473C25.7856 25.5017 27.553 24.2176 27.0513 22.6734L26.2325 20.1534C26.1577 19.9231 26.2396 19.671 26.4354 19.5287L28.5791 17.9713C29.8927 17.0169 29.2175 14.9392 27.5939 14.9392L24.9442 14.9392C24.7022 14.9392 24.4876 14.7834 24.4128 14.5532L23.594 12.0331Z"
              fill="#4B5563"
            />
          </svg>
          Quality Perfect Guarantee
        </span>
        <span className="flex gap-5 items-center justify-center font-semibold lg:text-xl">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.1758 20.2958C40.9237 19.5668 41.1878 18.497 40.8652 17.5024C40.5418 16.5079 39.6994 15.798 38.6646 15.6473L29.4636 14.3104C29.0718 14.2533 28.7332 14.0076 28.5582 13.6522L24.4447 5.31566C23.9828 4.37897 23.0453 3.79688 22.0006 3.79688C20.9566 3.79688 20.0192 4.37897 19.5573 5.31566L15.4431 13.653C15.268 14.0083 14.9287 14.2541 14.5368 14.3112L5.33585 15.6481C4.30176 15.798 3.45867 16.5087 3.13528 17.5032C2.81266 18.4977 3.07669 19.5676 3.82467 20.2965L10.4819 26.7856C10.7657 27.0626 10.8958 27.4613 10.8289 27.8509L9.25835 37.0138C9.1191 37.8203 9.33064 38.6048 9.85263 39.2235C10.6638 40.1875 12.0798 40.4813 13.2121 39.8862L21.4406 35.5597C21.7845 35.3793 22.2175 35.3809 22.5606 35.5597L30.7899 39.8862C31.1902 40.097 31.617 40.2035 32.0576 40.2035C32.8619 40.2035 33.6243 39.8459 34.1486 39.2235C34.6713 38.6048 34.8821 37.8188 34.7429 37.0138L33.1716 27.8509C33.1046 27.4605 33.2347 27.0626 33.5185 26.7856L40.1758 20.2958Z"
              fill="#4B5563"
            />
          </svg>
          4.9 Rating
        </span>
        <span className="flex gap-5 items-center justify-center font-semibold lg:text-xl">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 4.125C12.1279 4.125 4.125 12.1279 4.125 22C4.125 31.8721 12.1279 39.875 22 39.875C22.7594 39.875 23.375 39.2594 23.375 38.5V33.0001C23.375 27.6841 27.6833 23.375 32.9988 23.375H38.5C39.2594 23.375 39.875 22.7594 39.875 22C39.875 12.1279 31.8721 4.125 22 4.125ZM22 10.1306C22.7594 10.1306 23.375 10.7462 23.375 11.5056V21.9638C23.386 22.3294 23.2519 22.6986 22.9729 22.9776L16.6129 29.3377C16.0759 29.8746 15.2053 29.8746 14.6684 29.3377C14.1314 28.8006 14.1314 27.9301 14.6684 27.3932L20.625 21.4364V11.5056C20.625 10.7462 21.2406 10.1306 22 10.1306Z"
              fill="#4B5563"
            />
            <path
              d="M38.5 27.3348L32.2112 33.5643C32.0048 33.7689 31.7596 33.9313 31.4898 34.0421C31.2201 34.1528 30.9309 34.2098 30.6389 34.2098C30.3468 34.2098 30.0576 34.1528 29.7879 34.0421C29.5181 33.9313 29.2731 33.7689 29.0667 33.5643L27.5 32.0013"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          24/7 Delivery Support
        </span>
        <span className="flex gap-5 items-center justify-center font-semibold lg:text-xl">
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.357 18.9588C12.5344 18.9588 10.9772 18.3146 9.68555 17.0262C8.39388 15.7377 7.74805 14.1822 7.74805 12.3595C7.74805 10.5368 8.39514 8.97966 9.68934 7.68799C10.9835 6.39632 12.546 5.75049 14.3768 5.75049C16.2076 5.75049 17.7619 6.39759 19.0397 7.69178C20.3175 8.98598 20.9564 10.5485 20.9564 12.3793C20.9564 14.2101 20.3122 15.7644 19.0237 17.0422C17.7353 18.3199 16.1797 18.9588 14.357 18.9588ZM14.3828 15.0422C15.1263 15.0422 15.755 14.7819 16.2689 14.2615C16.7828 13.7411 17.0397 13.1091 17.0397 12.3657C17.0397 11.6222 16.7795 10.9935 16.2591 10.4797C15.7386 9.96577 15.1067 9.70882 14.3633 9.70882C13.6198 9.70882 12.9911 9.96903 12.4772 10.4894C11.9633 11.0099 11.7064 11.6418 11.7064 12.3853C11.7064 13.1288 11.9666 13.7574 12.487 14.2713C13.0075 14.7852 13.6394 15.0422 14.3828 15.0422ZM31.6193 36.2505C29.7885 36.2505 28.2342 35.6034 26.9564 34.3092C25.6786 33.015 25.0397 31.4525 25.0397 29.6217C25.0397 27.7909 25.6839 26.2366 26.9724 24.9588C28.2608 23.681 29.8164 23.0422 31.639 23.0422C33.4617 23.0422 35.0189 23.6864 36.3106 24.9748C37.6022 26.2633 38.2481 27.8188 38.2481 29.6415C38.2481 31.4642 37.601 33.0213 36.3068 34.313C35.0126 35.6047 33.4501 36.2505 31.6193 36.2505ZM31.6328 32.2922C32.3763 32.2922 33.005 32.0319 33.5189 31.5115C34.0328 30.9911 34.2897 30.3591 34.2897 29.6157C34.2897 28.8722 34.0295 28.2435 33.5091 27.7297C32.9886 27.2158 32.3567 26.9588 31.6133 26.9588C30.8698 26.9588 30.2411 27.219 29.7272 27.7394C29.2133 28.2599 28.9564 28.8918 28.9564 29.6353C28.9564 30.3788 29.2166 31.0074 29.737 31.5213C30.2575 32.0352 30.8894 32.2922 31.6328 32.2922ZM11.4147 35.3338L8.66471 32.5838L34.5814 6.66716L37.3314 9.41716L11.4147 35.3338Z"
              fill="#4B5563"
            />
          </svg>
          25% Off Store-wide
        </span>
      </div>
    </div>
  );
};

export default Hero;

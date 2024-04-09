import React from "react";

const ReviewCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  return (
    <div className="min-w-[380px] h-[348px] rounded-[20px] p-8 flex flex-col items-start justify-start gap-3 text-[#403E5A] bg-[#fff]">
      <div className="flex justify-between items-center w-full">
        <span className="flex gap-[0.7px]">
          {starNo.map((_, i) => (
            <span className="bg-yellow-500 p-[0.5px]" key={i}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.4792L10.0417 9.70833L11.3125 13.625L7 10.4792ZM14 5.41667H8.64583L7 0.375L5.35417 5.41667H0L4.33333 8.54167L2.6875 13.5833L7.02083 10.4583L9.6875 8.54167L14 5.41667Z"
                  fill="white"
                />
              </svg>
            </span>
          ))}
        </span>
        <p className="text-xs">2 days ago</p>
      </div>
      <h3 className="font-bold text-xl ">Best on the market</h3>

      <p className="text-base pb-[12px] border-b-2 border-[#C4C4C4]">
        Nunc elit metus, ultrices eu eleifend interdum, sodales eget risus.
        Integer hendrerit, libero nec dapibus elementum, mi nunc posuere enim,
        non hendrerit eros arcu eget augue. Suspendisse faucibus ante leo, at
        porta lectus ornare eu. Mauris a libero eu massa aliquet bibendum.{" "}
      </p>
      <span className="text-sm font-semibold">Wordtraveler</span>
    </div>
  );
};

export default ReviewCard;

/* eslint-disable react/prop-types */
import React from "react";
import place from "@/assets/img/place.jpg";
// eslint-disable-next-line react/prop-types
export const PreviewDetail = ({ resumeInfo }) => {
  return (
    <>
      <section className="flex justify-between">
        <div>
          <h2
            className="font-bold text-xl text-start"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h2>
          <h2 className="text-start text-sm font-medium">
            {resumeInfo?.jobTitle}
          </h2>
          <h2
            className="text-start font-normal text-xs flex"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {resumeInfo?.address ? (
              <>
                <svg
                  style={{
                    color: resumeInfo?.themeColor,
                  }}
                  className="w-4 h-4 text-gray-400 dark:text-white mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {resumeInfo?.address}
              </>
            ) : (
              <></>
            )}
          </h2>

          <div className="flex flex-col">
            <h2
              className="font-normal text-xs flex"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              {resumeInfo?.phone ? (
                <>
                  <svg
                    className="w-4 h-4 text-gray-400 dark:text-white mr-2"
                    style={{
                      color: resumeInfo?.themeColor,
                    }}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                  {resumeInfo?.phone}
                </>
              ) : (
                <></>
              )}
            </h2>
            <h2
              className="font-normal text-xs flex"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              {resumeInfo?.email ? (
                <>
                  <svg
                    style={{
                      color: resumeInfo?.themeColor,
                    }}
                    className="w-4 h-4 text-gray-400 dark:text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                  </svg>
                  {resumeInfo?.email}
                </>
              ) : (
                <></>
              )}
            </h2>
          </div>
        </div>
        <div className="flex items-center">
          <img src={place} width={70} height={70} alt="" className="" />
        </div>
      </section>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </>
  );
};

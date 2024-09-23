import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          to="/"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-primary px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <a href="https://cpu-isimm.tn" className="text-sm font-medium">
            AI Resume is out! See what's new
          </a>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl dark:text-white">
          We invest in the Student's potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          At CPU-ISIMM, we empower students by developing their soft and hard
          skills, driving innovation and growth in technology and robotics{" "}
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/dashboard"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-primary text-primary rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            FEATURED IN
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="https://www.facebook.com/CPU.ISIMM/"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <div className="flex flex-col items-center">
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6757 0H1.32431C0.592706 0 0 0.592706 0 1.32431V22.6757C0 23.4073 0.592706 24 1.32431 24H12.8195V14.709H9.69249V11.25H12.8195V8.66714C12.8195 5.65524 14.657 3.95693 17.3235 3.95693C18.5621 3.95693 19.6467 4.04647 19.9261 4.0808V7.19577L17.9442 7.19676C16.4065 7.19676 16.1285 7.94848 16.1285 9.06534V11.25H19.7923L19.3401 14.709H16.1285V24H22.6757C23.4073 24 24 23.4073 24 22.6757V1.32431C24 0.592706 23.4073 0 22.6757 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="mt-2">Facebook</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/cpu-isimm-068816218"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <div className="flex flex-col items-center">
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72V22.27C0 23.23 0.79 24 1.77 24H22.23C23.2 24 24 23.23 24 22.27V1.72C24 0.77 23.2 0 22.23 0ZM7.12 20.48H3.56V9H7.12V20.48ZM5.34 7.49C4.14 7.49 3.17 6.51 3.17 5.31C3.17 4.11 4.14 3.13 5.34 3.13C6.53 3.13 7.51 4.11 7.51 5.31C7.51 6.51 6.53 7.49 5.34 7.49ZM20.48 20.48H16.93V14.66C16.93 13.14 16.91 11.22 14.93 11.22C12.92 11.22 12.65 12.9 12.65 14.55V20.48H9.1V9H12.48V10.62H12.53C13.07 9.57 14.26 8.65 16.03 8.65C20.03 8.65 20.48 11.21 20.48 14.18V20.48Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="mt-2">LinkedIn</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/cpu.isimm/"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <div className="flex flex-col items-center">
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.16C6.62 2.16 2.16 6.62 2.16 12C2.16 17.38 6.62 21.84 12 21.84C17.38 21.84 21.84 17.38 21.84 12C21.84 6.62 17.38 2.16 12 2.16ZM12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0ZM12 5.84C9.317 5.84 7.16 7.997 7.16 10.68C7.16 13.363 9.317 15.52 12 15.52C14.683 15.52 16.84 13.363 16.84 10.68C16.84 7.997 14.683 5.84 12 5.84ZM12 13.92C10.491 13.92 9.28 12.709 9.28 11.2C9.28 9.691 10.491 8.48 12 8.48C13.509 8.48 14.72 9.691 14.72 11.2C14.72 12.709 13.509 13.92 12 13.92ZM17.044 6.2C16.504 6.2 16.08 6.624 16.08 7.164C16.08 7.704 16.504 8.128 17.044 8.128C17.584 8.128 18.008 7.704 18.008 7.164C18.008 6.624 17.584 6.2 17.044 6.2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="mt-2">Instagram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

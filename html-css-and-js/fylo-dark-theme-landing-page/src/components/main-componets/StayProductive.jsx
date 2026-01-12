function StayProductive() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-8 px-8 md:px-12 md:py-16 gap-8">
      <div>
        <img
          src="/images/illustration-stay-productive.png"
          alt="illustration stay productive"
        />
      </div>
      <div className="text-[hsl(0,0%,100%)] flex flex-col gap-4 md:justify-center">
        <h2 className="text-2xl font-semibold">
          Stay productive, wherever you are.
        </h2>
        <p className="text-xl md:text-md">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-xl md:text-md">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="text-[hsl(176,68%,64%)] flex items-center gap-2 w-fit relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-0.5 after:w-full after:bg-[hsl(176,68%,64%)] hover:after:bg-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,100%)]
                        transition-all duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out"
        >
          <span>See how Fylo works</span>
          <svg
            className="h-5 w-auto"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <circle id="b" cx="6" cy="6" r="6" />
              <filter
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="1"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                  in="shadowBlurOuter1"
                />
              </filter>
            </defs>
            <g fill="currentColor" fillRule="evenodd">
              <g transform="translate(2 2)">
                <use fill="currentColor" filter="url(#a)" xlink:href="#b" />
                <use fill="currentColor" xlink:href="#b" />
              </g>
              <path
                d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                fill="#1B2330"
              />
            </g>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default StayProductive;

import axios from "axios";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";

function Main({ isDark }) {

  // useStates
  const [extensionList, setExtensionList] = useState([]);
  const [active, setActive] = useState([]);

  // This code fetches data from a json file
  useEffect(() => {
    axios.get("../../data.json").then((response) => {
      setExtensionList(response.data);
    });
  }, []);

  return (
    <main className="flex flex-col gap-8">
      {/* Header of main */}

      <div className="flex flex-col max-md:gap-4 md:flex-row md:items-center md:justify-between ">
        <h1
          className={`max-md:text-center text-3xl font-semibold ${isDark ? "text-[hsl(200,60%,99%)]" : "text-[hsl(225,23%,24%)]"}`}
        >
          Extensions List
        </h1>
        
        {/* Tabs */}
        <Tabs isDark={isDark} />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
        {extensionList.map((extension) => {
          return (
            <div
              key={extension.name}
              className={`shadow-sm shadow-[hsl(226,11%,37%)] rounded-xl p-4 ${isDark ? "bg-[hsl(225,23%,24%)]" : "bg-[hsl(200,60%,99%)]"}`}
            >
              <div className="grid grid-cols-[1fr_3fr]">
                <div className="h-12 w-12">
                  <img
                    className="h-full w-full"
                    src={extension.logo}
                    alt="logo"
                  />
                </div>
                <div>
                  <span className="text-[hsl(225,23%,24%)] text-lg font-semibold">
                    {extension.name}
                  </span>
                  <p className="text-[hsl(226,11%,37%)]">
                    {extension.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-[hsl(200,60%,99%)] border-2 border-[hsl(0,0%,78%)] rounded-3xl py-1 px-4">
                  Remove
                </button>
                <button className="cursor-pointer w-24" onClick={() => setActive(prev => !prev)}>
                  {active ? (
                    <svg
                      className="h-4 w-24 text-[hsl(0,0%,78%)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        d="M416 192C486.7 192 544 249.3 544 320C544 390.7 486.7 448 416 448L224 448C153.3 448 96 390.7 96 320C96 249.3 153.3 192 224 192L416 192zM608 320C608 214 522 128 416 128L224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320zM224 400C268.2 400 304 364.2 304 320C304 275.8 268.2 240 224 240C179.8 240 144 275.8 144 320C144 364.2 179.8 400 224 400z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-24 text-[hsl(3,71%,56%)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;

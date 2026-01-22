import { useState } from "react";

function Tabs({ isDark }) {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = ["All", "Active", "Inactive"];
  
  return (
    <div
      className={`flex gap-4 justify-center ${isDark ? "text-[hsl(0,0%,100%)]" : "bg-[] text-[hsl(225,23%,24%)]"}`}
    >
      {tabs.map((tab, index) => {
        return (
          <button
            key={index}
            className={`bg-[hsl(200,60%,99%)] shadow-sm shadow-[hsl(226,11%,37%)] px-4 py-1 rounded-3xl cursor-pointer
                        ${isDark ? "bg-[hsl(225,23%,24%)]" : "bg-[hsl(0,0%,100%)]"}
                        ${currentTab === index ? "bg-[hsl(3,71%,56%)]" : ""}
            `}
            onCanPlayThrough={() => setCurrentTab(index)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;

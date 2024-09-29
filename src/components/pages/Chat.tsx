import { SidebarDemo } from "../demo/SidebarDemo";
import Prediction from "../demo/Prediction";
import PreviousCases from "../demo/PreviousCases";
import WhatAsked from "../demo/WhatAsked";
import RelatedSections from "../demo/RelatedSections";

const Chat = () => {
  return (
    <div className="bg-[#faf9f8] text-black flex flex-col md:flex-row w-full min-h-screen">
      <SidebarDemo />
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main content */}
          <div className="md:col-span-3 mx-4 md:mx-10">
            <WhatAsked />
            <RelatedSections />
            <Prediction />
          </div>
          {/* Sidebar content */}
          <div className="md:col-span-1 border-t md:border-l md:border-t-0 border-[#9d662e] border-dotted mt-4 md:mt-0">
            <PreviousCases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

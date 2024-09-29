import { SidebarDemo } from "../demo/SidebarDemo";

import Prediction from "../demo/Prediction";
import PreviousCases from "../demo/PreviousCases";
import WhatAsked from "../demo/WhatAsked";
import RelatedSections from "../demo/RelatedSections";
const Chat = () => {
  return (
    <div>
      <div className="bg-[#faf9f8] text-black flex md:flex-row  w-full min-h-screen">
        <SidebarDemo />
        <div className="w-full mt-10">
          <div className="grid grid-flow-col grid-cols-4">
            <div className="col-span-3 mx-10">
              <div>
                <WhatAsked />
                <RelatedSections />
                <Prediction />
              </div>
            </div>
            <div className="col-span-1 border-l border-[#9d662e] border-dotted">
              <PreviousCases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

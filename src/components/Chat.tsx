import { SidebarDemo } from "./SidebarDemo";
import { useLocation } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { arrow } from "../assets";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
const Chat = () => {
  const location = useLocation();
  const { input } = location.state || {};
  return (
    <div>
      <div className="bg-[#faf9f8] text-black flex md:flex-row  w-full min-h-screen">
        {" "}
        <SidebarDemo />
        <div className="w-full mt-10">
          <div className="grid grid-flow-col grid-cols-4">
            <div className="col-span-3 mx-10">
              <div>
                <div className="py-4">
                  <h1 className="text-2xl font-bold">You asked:</h1>
                  <div className="m-2">
                    <p className="text-xl font-semibold text-black ">
                      {input ? `${input}` : "No input provided"}
                    </p>
                    <p>
                      Searched for recent breach of contract case laws,
                      including precedents, predictive outcomes, and relevant
                      sections of the Indian Contract Act and Specific Relief
                      Act. Provided data includes cases with similar context,
                      expected compensation, and legal framework.
                    </p>
                  </div>
                </div>
                <div className="border-t py-4 border-[#9d662e] border-dotted">
                  <h1 className="font-bold text-2xl">
                    Related IPCs, Sections, Acts, and Laws
                  </h1>
                  <div className="m-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>

                <div className="border-t py-4 border-[#9d662e] border-dotted">
                  {" "}
                  <h1 className="font-bold text-2xl">prdeictions....</h1>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-span-1 border-l border-[#9d662e] border-dotted">
              <div className="mx-10">
                <p className="text-xl font-bold">Previous Similar Cases</p>
                <div className="mt-5">
                  <Card className="min-h-40 p-2">
                    <h1 className="text-lg font-semibold">
                      M/S Alcon Laboratories (India) Pvt. Ltd. vs P.K.
                      Rajasekharan
                    </h1>
                    <ul className="mt-2">
                      <li>- Kerala High Court, 2020</li>
                      <li>
                        - Outcome: Specific performance awarded in favor of the
                        plaintiff.
                      </li>
                    </ul>
                  </Card>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button
                    className="text-white bg-[#ae5530] pointer-events-auto"
                    variant="default"
                  >
                    Download
                  </Button>
                  <Button
                    className="text-white bg-[#ae5530] pointer-events-auto"
                    variant="default"
                  >
                    Learn More{" "}
                    <img
                      src={arrow}
                      alt="EACC.dev logo"
                      className="h-3 w-3 ml-2 "
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

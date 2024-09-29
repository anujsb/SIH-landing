import { SidebarDemo } from "../demo/SidebarDemo";
import { useLocation } from "react-router-dom";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { arrow } from "../../assets";
import {
  AlertDialog,
  // AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
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
                  <div className="m-2 flex gap-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="default"
                          className="border rounded-lg border-[#9d662e] dark:bg-white shadow-md border-dashed hover:border-solid hover:border-[#9d662e] hover:shadow-xl"
                        >
                          Section 73
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Compensation for Loss or Damage Caused by Breach of
                            Contract
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This section deals with the compensation a party can
                            claim when there is a breach of contract. If one
                            party fails to perform their contractual
                            obligations, the aggrieved party is entitled to
                            compensation for the losses directly arising from
                            the breach. This includes actual losses and damages
                            that the parties could foresee at the time of
                            entering into the contract.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Back</AlertDialogCancel>
                          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="default"
                          className="border rounded-lg border-[#9d662e] dark:bg-white shadow-md border-dashed hover:border-solid hover:border-[#9d662e] hover:shadow-xl"
                        >
                          Section 74
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Compensation for Breach where Penalty Stipulated
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This section addresses cases where the contract
                            includes a penalty or liquidated damages clause. If
                            a breach occurs, the party in breach must pay the
                            stipulated penalty. However, the courts have the
                            power to reduce the penalty to a reasonable amount
                            if it is excessive.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Back</AlertDialogCancel>
                          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="default"
                          className="border rounded-lg border-[#9d662e] dark:bg-white shadow-md border-dashed hover:border-solid hover:border-[#9d662e] hover:shadow-xl"
                        >
                          Section 10
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Specific Performance of Contracts
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This section allows courts to order specific
                            performance of a contract, which means forcing the
                            breaching party to fulfill their contractual
                            obligations. Specific performance is typically
                            awarded in cases where monetary compensation is
                            insufficient to make the aggrieved party whole
                            (e.g., in contracts involving unique goods or
                            property).
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Back</AlertDialogCancel>
                          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>

                <div className="border-t py-4 border-[#9d662e] border-dotted">
                  {" "}
                  <h1 className="font-bold text-2xl">prdeictions....</h1>
                  <ul className="m-2">
                    <li>
                      Probability of Plaintiff's Success: 65% based on similar
                      breach of contract cases.
                    </li>
                    <li>
                      Expected Duration: 12-18 months, based on previous cases
                      in High Courts.
                    </li>
                    <li>
                      Financial Outcome: Likely damages awarded between ₹10-50
                      crores, depending on the severity and extent of breach.
                    </li>
                  </ul>
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

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { arrow } from "../../assets";
const PreviousCases = () => {
  return (
    <div className="mx-10">
      <p className="text-xl font-bold">Previous Similar Cases</p>
      <div className="mt-5">
        <Card className="min-h-40 p-2">
          <h1 className="text-lg font-semibold">
            M/S Alcon Laboratories (India) Pvt. Ltd. vs P.K. Rajasekharan
          </h1>
          <ul className="mt-2">
            <li>- Kerala High Court, 2020</li>
            <li>
              - Outcome: Specific performance awarded in favor of the plaintiff.
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
          <img src={arrow} alt="EACC.dev logo" className="h-3 w-3 ml-2 " />
        </Button>
      </div>
    </div>
  );
};

export default PreviousCases;

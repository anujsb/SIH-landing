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
import { Button } from "../ui/button";
const RelatedSections = () => {
  return (
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
                Compensation for Loss or Damage Caused by Breach of Contract
              </AlertDialogTitle>
              <AlertDialogDescription>
                This section deals with the compensation a party can claim when
                there is a breach of contract. If one party fails to perform
                their contractual obligations, the aggrieved party is entitled
                to compensation for the losses directly arising from the breach.
                This includes actual losses and damages that the parties could
                foresee at the time of entering into the contract.
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
                This section addresses cases where the contract includes a
                penalty or liquidated damages clause. If a breach occurs, the
                party in breach must pay the stipulated penalty. However, the
                courts have the power to reduce the penalty to a reasonable
                amount if it is excessive.
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
                This section allows courts to order specific performance of a
                contract, which means forcing the breaching party to fulfill
                their contractual obligations. Specific performance is typically
                awarded in cases where monetary compensation is insufficient to
                make the aggrieved party whole (e.g., in contracts involving
                unique goods or property).
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
  );
};

export default RelatedSections;

const Prediction = () => {
  return (
    <div className="border-t py-4 border-[#9d662e] border-dotted">
      {" "}
      <h1 className="font-bold text-2xl">predictions....</h1>
      <ul className="m-2">
        <li>
          Probability of Plaintiff's Success: 65% based on similar breach of
          contract cases.
        </li>
        <li>
          Expected Duration: 12-18 months, based on previous cases in High
          Courts.
        </li>
        <li>
          Financial Outcome: Likely damages awarded between ₹10-50 crores,
          depending on the severity and extent of breach.
        </li>
      </ul>
    </div>
  );
};

export default Prediction;

import { useContext } from "react";

import { EmployeeContext } from "../store/employees-context";

const Output = () => {
  let resultOutput;
  const { longestOverlap, importStatus } = useContext(EmployeeContext);
  const overlapData = !!longestOverlap && Object.keys(longestOverlap);

  if (importStatus === "completed" && !overlapData.length) {
    resultOutput = <p className="col">No overlap found.</p>;
  } else if (!importStatus && !overlapData.length) {
    resultOutput = <p className="col">Plase inset a CSV file to proceed.</p>;
  } else if (importStatus === "importing") {
    resultOutput = <p className="col">Procesing...</p>;
  } else {
    resultOutput = overlapData.map((key) => (
      <div key={key} className="col">
        {longestOverlap[key]}
      </div>
    ));
  }

  return (
    <section className="result">
      <header className="result-headers">
        <div className="col">Employee ID #1</div>
        <div className="col">Employee ID #2</div>
        <div className="col"> Project ID</div>
        <div className="col">Days worked</div>
      </header>
      <div className="line-break"></div>
      <div className="row">{resultOutput}</div>
    </section>
  );
};

export default Output;

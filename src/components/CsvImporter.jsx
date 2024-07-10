import { useContext } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { EmployeeContext } from "../store/employees-context";

import "react-csv-importer/dist/index.css";

const CsvImporter = () => {
  const { setData, setLongestOverlap } = useContext(EmployeeContext);

  return (
    <Importer
      defaultNoHeader={false}
      skipEmptyLines={true}
      processChunk={async (rows) => {
        setData(rows);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }}
      onComplete={() => {
        setLongestOverlap();
      }}
      onClose={() => {
        location.reload();
      }}
    >
      <ImporterField name="EmpID" label="EmpID" />
      <ImporterField name="ProjectID" label="ProjectID" />
      <ImporterField name="DateFrom" label="DateFrom" />
      <ImporterField name="DateTo" label="DateTo" />
    </Importer>
  );
};

export default CsvImporter;

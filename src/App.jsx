import { EmployeeProvider } from "./store/employees-context";

import Header from "./components/Header";
import CsvImporter from "./components/CsvImporter";
import Output from "./components/Output";
import ErrorBoundary from "./components/error/ErrorBoundary";
import MainWrapper from "./components/shared/MainWrapper";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MainWrapper>
        <EmployeeProvider>
          <section className="importer">
            <CsvImporter />
          </section>
          <Output />
        </EmployeeProvider>
      </MainWrapper>
    </ErrorBoundary>
  );
};

export default App;

import AllURLFooter from "./AllURLFooter";
import AllURLHeader from "./AllURLHeader";
import FetchURLData from "./FetchURLData";
import URLTable from "./URLTable";

const AllURL = () => {
  return (
    <>
      <FetchURLData />
      <AllURLHeader />
      <URLTable />
      <AllURLFooter />
    </>
  );
};

export default AllURL;

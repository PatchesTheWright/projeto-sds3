import NavBar from "components/NavBar"
import Footer from "components/Footer"
import DataTable from "components/DataTable"
import { Fragment } from "react";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá mundo!</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;

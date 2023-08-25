import React, { useState } from "react";
import "./index.css";
import Table from "./components/table";
import { data } from "./services/data";


function App() {

  return (
    <div className="container">
      <div className="container__table">
        <div className="wrap__table">
          <Table data={data} />

        </div>
      </div>
    </div>
  );
}

export default App;

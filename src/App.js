import RouterCom from "./routes/router";
import React from 'react';

import { Helmet } from "react-helmet-async";
import MetaTag from "./components/MetaTag";

import { useState } from "react";

const MemorizedRouterCom = React.memo(RouterCom);

function App() {
  const [h, setH] = useState("");
  const [c, setC] = useState("");
  const [j, setJ] = useState("");

  return (
    <div style={{ height: "inherit" }}>
      {j === "" && h === "" && c === "" ? (
        <Helmet>
          <title>혼자번당</title>
        </Helmet>
      ) : <MetaTag heading={h} content={c} job={j}/>}

      <MemorizedRouterCom
        style={{ height: "auto" }}
        setH={setH}
        setC={setC}
        setJ={setJ}
      />
    </div>
  );
}

export default App;

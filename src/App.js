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
  const [d, setD] = useState("");

  return (
    <div style={{ height: "inherit" }}>
      {j === "" && h === "" && c === "" ? (
        <Helmet>
          <title>혼자당</title>
        </Helmet>
      ) : <MetaTag heading={h} content={c} job={j} dang={d}/>}

      <MemorizedRouterCom
        style={{ height: "auto" }}
        setH={setH}
        setC={setC}
        setJ={setJ}
        setD={setD}
      />
    </div>
  );
}

export default App;

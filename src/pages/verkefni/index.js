import React from "react";

import Layout from "../../components/Layout";

const Verkefni = (props) => {
  return (
    <Layout>
      <h1>Verkefni</h1>
      <ul>
        <li>
          <a href="/verkefni/fosshótel">Fosshótel</a>
        </li>
        <li>
          <a href="/verkefni/lindex">Lindex</a>
        </li>
        <li>
          <a href="/verkefni/sólvangur">Sólvangur Hjúkrunarheimili</a>
        </li>
        <li>
          <a href="/verkefni/blikahöfði5-7">Blikahöfði 5 - 7</a>
        </li>
        <li>
          <a href="/verkefni/vegghamrar2-10">Vegghamrar 2 - 10</a>
        </li>
      </ul>
    </Layout>
  );
};

export default Verkefni;
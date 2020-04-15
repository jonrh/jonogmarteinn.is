import React from "react";

import Layout from "../../components/Layout";

const Þjónustur = () => {
  return (
    <Layout>
      <h1>Þjónustur</h1>
      <ul>
        <li>
          <a href="/þjónustur/íbúðarhúsnæði">Íbúðarhúsnæði</a>
        </li>
        <li>
          <a href="/verkefni/fosshótel">Fjölbýlishús</a>
        </li>
        <li>
          <a href="/verkefni/fosshótel">Atvinnuhúsnæði</a>
        </li>
        <li>
          <a href="/verkefni/fosshótel">Sérverkefni</a>
        </li>
        <li>
          <a href="/verkefni/fosshótel">Innimálun</a>
        </li>
      </ul>
    </Layout>
  );
};

export default Þjónustur;
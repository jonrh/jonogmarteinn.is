import React from "react";

import Layout from "../components/Layout";
import Profile1_Jon from "../images/profile1_jon.jpg";
import Profile2_Marteinn from "../images/profile2_marteinn.jpg";

const Fyrirtækið = () => {
  return (
    <Layout>
      <h1 className="text-center">Um Fyrirtækið</h1>

      {/* Copy paste from index.js for now so we have some content. */}
      <section className="text-center mt-5">
        <div className="container">
          <div className="row mb-5 text-justify">
            <div className="col-11 col-md-10 col-lg-8 mx-auto">
              <p className="lead">
                Jón og Marteinn Málningarþjónusta ehf. er fyrirtæki sem tekur að sér öll
                almenn málningarverkefni. Verkefni stór sem smá, sérsniðið að óskum og þörfum og
                hvar sem er á landinu. Höfum einnig tekið að okkur verkefni erlendis.
              </p>

              <p className="lead">
                Jón Hafdal er <strong>löggiltur málarameistari</strong> og hefur að baki 15 ára
                reynslu af málun, Marteinn 20 ár. Hjá fyrirtækinu starfa samtals 8 starfsmenn
                meðtalið Jóni og Marteini.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={Profile1_Jon} alt="Portrait of Jón Hafdal" />
                <h5>Jón Hafdal Sigurðarson</h5>
                <p className="font-weight-bold mb-0 h3">
                  <a href="tel:+3547701532">
                    <i className="icon-phone m-auto red-theme" />
                    770 1532
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={Profile2_Marteinn} alt="Portrait of Marteinn" />
                <h5>Marteinn Hilmarsson</h5>
                <p className="font-weight-bold mb-0 h3">
                  <a href="tel:+3548611242">
                    <i className="icon-phone m-auto red-theme" />
                    861 1242
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Fyrirtækið;
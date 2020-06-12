import React from "react";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./../styles/landing-page.css";
import "./../styles/jonogmarteinn.css";

import LogoWhiteText4224 from "./../images/logo-whitetext-4224.png";
import JonAndMarteinnStanding from "./../images/jonogmarteinn-standing.png";
import Ibudarhus1_920x912 from "./../images/ibudarhus1-920x912.jpg";
import Fjolbylishus1 from "./../images/fjolbylishus1.jpg";
import Atvinnu1 from "./../images/atvinnu1.jpg";
import Serverkefni1_804x820 from "./../images/serverkefni1-804x820.jpg";
import Fosshotel3 from "./../images/fosshotel/fosshotel3.jpg";
import Fosshotel4 from "./../images/fosshotel/fosshotel4.jpg";
import Fosshotel5 from "./../images/fosshotel/fosshotel5.jpg";
import Fosshotel6 from "./../images/fosshotel/fosshotel6.jpg";
import Lindex from "./../images/lindex.jpg";
import Solvangur1 from "./../images/solvangur/solvangur1.jpg";
import Solvangur2 from "./../images/solvangur/solvangur2.jpg";
import Solvangur3 from "./../images/solvangur/solvangur3.jpg";
import Solvangur4 from "./../images/solvangur/solvangur4.jpg";
import Solvangur5 from "./../images/solvangur/solvangur5.jpg";
import Solvangur6 from "./../images/solvangur/solvangur6.jpg";
import Solvangur7 from "./../images/solvangur/solvangur7.jpg";
import Blikahofdi1 from "./../images/blikahofdi1.jpg";
import Vegghamrar1 from "./../images/vegghamrar2-10/vegghamrar1.jpg";
import Profile1_Jon from "./../images/profile1_jon.jpg";
import Profile2_Marteinn from "./../images/profile2_marteinn.jpg";
import Header from "../components/Header";

/** Convenience function to return a React style object with a background image */
const backgroundImage = (image) => ({ backgroundImage: `url('${image}')` });

const Index = (props) => {
  return (
    <>
      <Helmet>
        <html lang="is" />
        <meta name="description" content="Jón og Marteinn Málningarþjónusta ehf. Löggiltur málarameistari. Jón Hafdal Sigurðarson: 770 1532, Marteinn Hilmarsson: 861 1242. jonogmarteinn@jonogmarteinn.is" />
        <meta name="author" content="Jón Rúnar Helgason, jonrh.is" />

        <title>Jón og Marteinn Málningarþjónusta</title>
      </Helmet>

      {/* Header navigation */}
      <div className="container">
        <Header />
      </div>

      {/* Masthead */}
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src={LogoWhiteText4224} alt="Jón og Marteinn logo" className="img-fluid" />
              <h2>alhliða málningarþjónusta</h2>
            </div>
          </div>
        </div>
      </header>

      {/* 3x Icon Grid */}
      <section className="features-icons bg-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-diamond m-auto red-theme" />
                </div>
                <h3>Nýmálun</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto red-theme" />
                </div>
                <h3>Viðhaldsvinna</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-badge m-auto red-theme" />
                </div>
                <h3>Spörslun</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="jonogmarteinn-standing">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                className="img-fluid"
                src={JonAndMarteinnStanding}
                alt="Jón og Marteinn standandi hlið við hlið"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Þjónustur & Verkefni */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {/* Þjónustur heading */}
          <div className="row heading no-gutters">
            <div className="overlay" />
            <div className="col text-center">
              <h2 className="text-white">Þjónustur</h2>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={ backgroundImage(Ibudarhus1_920x912) }
              role="img" aria-label="Hvítt íbúðarhúsnæði með gráblátt þak"
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3>Íbúðarhúsnæði</h3>
              <p className="lead mb-0">
                Einstaklingar, þakmálun, útimálun, innimálun. Litaráðgjöf. Fáðu fagmenn okkar í verkið.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={ backgroundImage(Fjolbylishus1) }
              role="img" aria-label="Nýmálað hvítt fjölbýlishús"
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h3>Fjölbýlishús</h3>
              <p className="lead mb-0">
                Búum yfir mikilli reynslu við að þjónusta fasteignafélög og húsfélög. Hvort sem um er
                að ræða nýbyggingu eða viðhaldsvinnu.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={ backgroundImage(Atvinnu1) }
              role="img" aria-label="Hvítt atvinnuhúsnæði"
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3>Atvinnuhúsnæði</h3>
              <p className="lead mb-0">
                Stofnanir og fyrirtæki af öllum stærðum og gerðum.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={ backgroundImage(Serverkefni1_804x820) }
              role="img" aria-label="Appelsínugult handriði í stigagangi með grábláum vegg"
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h3>Sérverkefni</h3>
              <p className="lead mb-0">
                Tökum að okkur hverskonar smærri sérverkefni. Ef það er kominn tími á að gefa pallinum
                og skjólveggnum ást og alúð þá reddum við þér fljótt og örugglega.
              </p>
            </div>
          </div>

          {/* Verkefni heading */}
          <div className="row heading no-gutters">
            <div className="overlay" />
            <div className="col text-center">
              <h2 className="text-white">Verkefni</h2>
            </div>
          </div>

          {/* Fosshótel */}
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white">
              <div id="carouselFosshotel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div
                    className="carousel-item active"
                    style={ backgroundImage(Fosshotel3) }
                    role="img" aria-label="Mynd tekin fyrir framan Fosshótel á Hnappavöllum"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Fosshotel6) }
                    role="img" aria-label="Svart ytra tréverk hótelsins með lyftukörfu fyrir framan"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Fosshotel5) }
                    role="img" aria-label="Ytri hlið hótelsins sem sýnir svart tréverk"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Fosshotel4) }
                    role="img" aria-label="Starfsmaður að mála loftið inni á hótelinu"
                  />
                </div>
                <a className="carousel-control-prev" href="#carouselFosshotel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Fyrri</span>
                </a>
                <a className="carousel-control-next" href="#carouselFosshotel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Næsta</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3>Fosshótel</h3>
              <p className="lead mb-0">
                Verkefni í vinnslu fyrir Fosshótel á Hnappavöllum við Jökulsárlón. Endurmálun á ytra
                tréverki sem og innanhús á hótelinu.
              </p>
            </div>
          </div>

          {/* Lindex */}
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={ backgroundImage(Lindex) }
              role="img" aria-label="Jón Hafdal að kítta við andyri Lindex verslunar í Kaupmannahöfn"
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h3>Lindex</h3>
              <p className="lead mb-0">
                Höfum séð alfarið um málningarþjónustu fyrir Lindex á Íslandi frá því að fyrsta verslun
                opnaði árið 2011. Höfum einnig tekið að okkur verkefni í Kaupmannahöfn.
              </p>
            </div>
          </div>

          {/* Sólvangur Hjúkrunarheimili */}
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white">
              <div id="carouselSolvangur" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div
                    className="carousel-item active"
                    style={ backgroundImage(Solvangur1) }
                    role="img" aria-label="Sameiginlegt rými með hvítum veggjum"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur2) }
                    role="img" aria-label="Nýmálað hvítt hervergi vistmanns"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur3) }
                    role="img" aria-label="Nýmálaður blár veggur"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur4) }
                    role="img" aria-label="Nýmálður djúpsjávar grænn veggur"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur5) }
                    role="img" aria-label="Nýmálaður brúnn veggur"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur6) }
                    role="img" aria-label="Starfsmaður málar í kringum ljósrofa"
                  />
                  <div
                    className="carousel-item"
                    style={ backgroundImage(Solvangur7) }
                    role="img" aria-label="Starfsmaður málar bakvið handrið á gangi"
                  />
                </div>
                <a className="carousel-control-prev" href="#carouselSolvangur" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Fyrri</span>
                </a>
                <a className="carousel-control-next" href="#carouselSolvangur" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Næsta</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3>Sólvangur Hjúkrunarheimili</h3>
              <p className="lead mb-0">
                Höfum nýlokið við alla sparsl og málningarvinnu í glæsilegu hjúkrunarheimili Sólvangs í
                Hafnarfirði.
              </p>
            </div>
          </div>

          {/* Blikahöfði */}
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={ backgroundImage(Blikahofdi1) }
              role="img" aria-label="Dökk og ljósgræn málað fjölbýlishús á þremur hæðum"
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h3>Blikahöfði 5 - 7</h3>
              <p className="lead mb-0">
                Endurmálun fyrir húsfélag Blikhöfða 5 - 7. Útimálun á veggjum og tréverki.
              </p>
            </div>
          </div>

          {/* Vegghamrar */}
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={ backgroundImage(Vegghamrar1) }
              role="img" aria-label="Ljós-ljós brúnt málað fjölbýlishús á tvemur hæðum"
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3>Vegghamrar 2 - 10</h3>
              <p className="lead mb-0">
                Viðhald fyrir húsfélag Vegghamra 2 - 10. Útimálun á öllum veggjum og tréverki.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Um Okkur */}
      <section className="testimonials text-center bg-white">
        <div className="container">
          <h2 className="mb-5">Um Okkur</h2>
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

      {/* Call to Action */}
      <section className="call-to-action text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Hafðu samband og við gefum þér frítt tilboð!</h2>
              <p>
                <a href="mailto:jonogmarteinn@jonogmarteinn.is?Subject=Fyrirspurn" className="h2 text-white">
                  jonogmarteinn&#8203;@jonogmarteinn.is
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LightWidget, displays Instagram photos. Account & settings: lightwidget.com */}
      <section>
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
        <iframe
          title="Instagram myndir Jóns og Marteins"
          src="https://cdn.lightwidget.com/widgets/48b025719c3153beaa207400d3a5f49d.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        />
      </section>

      {/* Footer */}
      <footer className="footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <p className="mb-4 mb-lg-0">
                &copy; Jón og Marteinn Málningarþjónusta ehf. 2019 <br />
                Kennitala: <a href="https://www.rsk.is/fyrirtaekjaskra/leit/kennitala/6901181570">
                690118-1570</a>, Gauksrimi 34, 800 Selfoss
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/jon_og_marteinn_/"
                    aria-label="Jón & Marteinn á Instagram"
                  >
                    Við á Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

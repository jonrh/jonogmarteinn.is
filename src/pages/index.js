import React from "react";

import { LayoutNoContainer } from "../components/Layout";
import { MálarameistariTextDescription } from "./málarameistari";
import ProjectForm from "../components/ProjectForm";

import s from "./index.module.css";

import JonAndMarteinnStanding from "./../images/jonogmarteinn-standing.png";
import Ibudarhus1_920x912 from "./../images/ibudarhus1-920x912.jpg";
import Fjolbylishus1 from "./verkefni/vefarastræti/vefarastraeti_fjolbylishus_nymalun_1.jpg";
import Atvinnu1 from "./../images/atvinnu1.jpg";
import Serverkefni1_804x820 from "./../images/serverkefni1-804x820.jpg";
import Fosshotel3 from "./../images/fosshotel/fosshotel3.jpg";
import Lindex from "./../images/lindex.jpg";
import Solvangur1 from "./../images/solvangur/solvangur1.jpg";
import Blikahofdi1 from "./../images/blikahofdi1.jpg";
import Vegghamrar1 from "./../images/vegghamrar2-10/vegghamrar1.jpg";
import Profile1_Jon from "./../images/profile1_jon.jpg";
import Profile2_Marteinn from "./../images/profile2_marteinn.jpg";

/** Convenience function to return a React style object with a background image */
const backgroundImage = (image) => ({ backgroundImage: `url('${image}')` });
const H3Link = ({label, href}) => <a href={href}><h3>{label}</h3></a>;

/** An icon with a label under it. iconName: Simple Line Icon name. Example: "icon-diamond" */
const FeatureIcon = ({label, iconName}) => {
  const iconClassName = `${iconName} m-auto`;

  return (
    <div className="col-lg-4">
      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div className="features-icons-icon d-flex">
          <i className={iconClassName} />
        </div>
        <h3>{label}</h3>
      </div>
    </div>
  );
}

const Index = (props) => {
  return (
    <LayoutNoContainer isFrontpage={true}>
      <section>
        <ProjectForm />
      </section>

      {/* Picture of Jón and Marteinn standing next to each other */}
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

      {/* 3x Icon Grid */}
      <section className="features-icons bg-white text-center">
        <div className="container">
          <div className="row">
            <FeatureIcon label="Nýmálun" iconName="icon-diamond" />
            <FeatureIcon label="Viðhaldsvinna" iconName="icon-layers" />
            <FeatureIcon label="Spörslun" iconName="icon-badge" />
          </div>
        </div>
      </section>

      {/* Þjónustur & Verkefni */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {/* Málningarþjónusta heading */}
          <div className="row heading no-gutters">
            <div className="col text-center">
              <h2 className="h1">Málningarþjónusta</h2>
            </div>
          </div>

          <div className={s.lightGrayBackground}>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={ backgroundImage(Ibudarhus1_920x912) }
                role="img" aria-label="Hvítt íbúðarhúsnæði með gráblátt þak"
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                {/*<H3Link label="Íbúðarhúsnæði" href="/málningarþjónusta/íbúðarhúsnæði" />*/}
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
                {/*<H3Link label="Fjölbýlishús" href="/málningarþjónusta/fjölbýlishús" />*/}
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
                {/*<H3Link label="Atvinnuhúsnæði" href="/málningarþjónusta/atvinnuhúsnæði" />*/}
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
                {/*<H3Link label="Sérverkefni" href="/málningarþjónusta/sérverkefni" />*/}
                <h3>Sérverkefni</h3>
                <p className="lead mb-0">
                  Tökum að okkur hverskonar smærri sérverkefni. Ef það er kominn tími á að gefa pallinum
                  og skjólveggnum ást og alúð þá reddum við þér fljótt og örugglega.
                </p>
              </div>
            </div>
          </div>

          {/* Verkefni heading */}
          <div className="row heading no-gutters">
            <div className="col text-center">
              <a href="/verkefni">
                <h2 className="h1">Verkefni</h2>
              </a>
            </div>
          </div>

          <div className={s.lightGrayBackground}>
            {/* Fosshótel */}
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={ backgroundImage(Fosshotel3) }
                role="img" aria-label="Mynd tekin fyrir framan Fosshótel á Hnappavöllum"
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <H3Link label="Fosshótel" href="/verkefni/fosshótel" />
                <p className="lead mb-0">
                  Endurmálun á ytra tréverki sem og innanhús á Fosshóteli á Hnappavöllum við
                  Jökulsárlón.
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
                <H3Link label="Lindex" href="/verkefni/lindex" />
                <p className="lead mb-0">
                  Höfum séð alfarið um málningarþjónustu fyrir Lindex á Íslandi frá því að fyrsta verslun
                  opnaði árið 2011. Höfum einnig tekið að okkur verkefni í Kaupmannahöfn.
                </p>
              </div>
            </div>

            {/* Sólvangur Hjúkrunarheimili */}
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={ backgroundImage(Solvangur1) }
                role="img" aria-label="Sameiginlegt rými með hvítum veggjum"
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <H3Link label="Sólvangur Hjúkrunarheimili" href="/verkefni/sólvangur" />
                <p className="lead mb-0">
                  Sparsl og innanhús málun fyrir nýtt og glæsilegt hjúkrunarheimili Sólvangs í
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
                <H3Link label="Blikahöfði 5 - 7" href="/verkefni/blikahöfði5-7" />
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
                <H3Link label="Vegghamrar 2 - 10" href="verkefni/vegghamrar2-10" />
                <p className="lead mb-0">
                  Viðhald fyrir húsfélag Vegghamra 2 - 10. Útimálun á öllum veggjum og tréverki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Málarameistari */}
      <section className="testimonials text-center bg-white">
        <div className="container">
          <h2 className="h1 mb-5">Málarameistari</h2>
          <div className="row mb-5 text-justify">
            <div className="col-11 col-md-10 col-lg-8 mx-auto">
              <MálarameistariTextDescription />
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
    </LayoutNoContainer>
  );
};

export default Index;

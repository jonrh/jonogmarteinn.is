import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./../styles/landing-page.css";
import "./../styles/jonogmarteinn.css";

/** Default HTML <head> tags that can then be overwritten on each page that uses Layout */
const DefaultHtmlHead = (props) => {
  const metaDescription =
    "Jón og Marteinn Málningarþjónusta ehf. Löggiltur málarameistari. Jón Hafdal Sigurðarson: " +
    "770 1532, Marteinn Hilmarsson: 861 1242. jonogmarteinn@jonogmarteinn.is";

  return (
    <Helmet>
      <html lang="is" />
      <meta name="description" content={metaDescription} />
      <meta name="author" content="Jón Rúnar Helgason, jonrh.is" />

      {/* Favicon related settings */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#cf1717" />

      <title>Jón og Marteinn Málningarþjónusta</title>
    </Helmet>
  );
};

/** Page layout with no container that wraps everything. Used by the front page. */
export const LayoutNoContainer = (props) => {
  return (
    <>
      <DefaultHtmlHead />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

/** The foundation of every page we make. Most pages require being wrapped in a container. */
const Layout = (props) => {
  return (
    <LayoutNoContainer>
      <Container>
        {props.children}
      </Container>
    </LayoutNoContainer>
  );
};

export default Layout;
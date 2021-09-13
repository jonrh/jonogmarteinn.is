import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

/** Default HTML <head> tags that can then be overwritten on each page that uses Layout */
const DefaultHtmlHead = (props) => {
  const metaDescription =
    "Jón og Marteinn Málningarþjónusta ehf. Löggiltur málarameistari. Jón Hafdal Sigurðarson: " +
    "770 1532, Marteinn Hilmarsson: 861 1242. jonogmarteinn@jonogmarteinn.is";

  return (
    <Head>
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
    </Head>
  );
};

/** Page layout with no container that wraps everything. Used by the front page. */
export const LayoutNoContainer = (props) => {
  return (
    <>
      <DefaultHtmlHead />
      <LiveChat />
      <Header isFrontpage={props.isFrontpage} />
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
import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./../styles/landing-page.css";
import "./../styles/jonogmarteinn.css";

const Layout = (props) => {
  const { children, isFrontPage } = props;
  const metaDescription =
    "Jón og Marteinn Málningarþjónusta ehf. Löggiltur málarameistari. Jón Hafdal Sigurðarson: " +
    "770 1532, Marteinn Hilmarsson: 861 1242. jonogmarteinn@jonogmarteinn.is";

  // If we are on the frontpage don't use a container because it's a bit custom in look
  const content = isFrontPage ? children : <Container>{children}</Container>;

  return (
    <>
      {/* Default HTML <head> tags that can then be overwritten on each page that uses Layout */}
      <Helmet>
        <html lang="is" />
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Jón Rúnar Helgason, jonrh.is" />

        <title>Jón og Marteinn Málningarþjónusta</title>
      </Helmet>

      <Header />
      {content}
      <Footer />
    </>
  );
};

export default Layout;
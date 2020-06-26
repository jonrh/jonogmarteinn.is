import React from "react";

const ListLinkSeperator = () => <li className="list-inline-item">&sdot;</li>;
const ListLink = ({label, href}) => {
  return (
    <li className="list-inline-item my-2">
      <a href={href} className="p-1">{label}</a>
    </li>
  );
}

/** Used in the header and footer of all pages */
const NavigationLinks = () => {
  return (
    <nav>
      <ul className="list-inline">
        <ListLink label="Forsíða" href="/" />
        <ListLinkSeperator />
        <ListLink label="Málningarþjónusta" href="/málningarþjónusta" />
        <ListLinkSeperator />
        <ListLink label="Verkefni" href="/verkefni" />
        <ListLinkSeperator />
        <ListLink label="Málarameistari" href="/málarameistari" />
      </ul>
    </nav>
  );
};

export default NavigationLinks;


import React from "react";
import Link from "next/link";

const ListLink = ({label, href, skipSeparator=false}) => {
  return (
    <li className="list-inline-item my-2 mx-0">
      <Link href={href} className="p-1">{label}</Link>
      { skipSeparator ? null : <span className="mx-2">&sdot;</span>}
    </li>
  );
}

/** Used in the header and footer of all pages */
const NavigationLinks = () => {
  return (
    <nav>
      <ul className="list-inline">
        <ListLink label="Forsíða" href="/" />
        {/*<ListLink label="Málningarþjónusta" href="/málningarþjónusta" />*/}
        <ListLink label="Verkefni" href="/verkefni" />
        <ListLink label="Málarameistari" href="/málarameistari" />
        <ListLink label="Verkbeiðni" href="/verkbeidni" skipSeparator={true} />
      </ul>
    </nav>
  );
};

export default NavigationLinks;
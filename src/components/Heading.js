import React from "react";

/**
 * Returns a <h1>, ..., <h6> depending of the heading level prop `h`. This is useful when we want to
 * conditionally and programmatically control what heading level to use. For example on the project
 * pages we want to use <h1> but if we are re-using the content of the page somewhere else we can
 * specify what level of heading to use so it fits correctly in the heading hierarchy.
 *
 * Example usage:
 *
 *    <Heading h="h1">Title 1</Heading>
 *    Becomes: <h1>Title 1</h1>
 *
 *    <Heading className="text-center" h="h2">Title 2</Heading>
 *    Becomes: <h2 className="text-center>Title 2</h2>
 *
 */
const Heading = (props) => {
  switch (props.h) {
    case "h1": return <h1 { ...props }>{props.children}</h1>;
    case "h2": return <h2 { ...props }>{props.children}</h2>;
    case "h3": return <h3 { ...props }>{props.children}</h3>;
    case "h4": return <h4 { ...props }>{props.children}</h4>;
    case "h5": return <h5 { ...props }>{props.children}</h5>;
    case "h6": return <h6 { ...props }>{props.children}</h6>;
    default: return <h1 { ...props }>{props.children}</h1>;
  }
};

export default Heading;
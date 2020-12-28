import React from "react";
//the JS conventional is to use PascalCase for the things that can be instantiated
// elements in JSX that start with capital letter are assumed to be
// react component .lowwer case are assumed to be native HTML.
function HomePage() {
  //by default, everything in file is private
  return (
    <div className="jumbotron">
      <h1>pluralsight administration</h1>
      <p>React, flux, and React Router for ultra-responsive web app</p>
      <a href="/about">About</a>
    </div>
  );
}
export default HomePage; //if a single item is being exported it is decalared as default

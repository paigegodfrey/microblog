import React from "react";
import TitleList from "./TitleList";

function HomePage() {

  return (
    <main>
      <p className="lead">Welcome to <b>Microblog,</b> our innovative site for 
        communicating on the information superhighway.</p>
      <TitleList />
    </main>
  )
}

export default HomePage;
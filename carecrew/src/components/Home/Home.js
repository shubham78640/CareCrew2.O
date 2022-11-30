import React from "react";
import HomeCrousel from "../Crousel/HomeCrousel";
import Footer from "../Footer/Footer";
import AskedQuestions from "../../HomePageComponents/AskedQuestions";
function Home() {
  return (
    <div>
      <HomeCrousel />
      <AskedQuestions />
      <Footer />
    </div>
  );
}

export default Home;

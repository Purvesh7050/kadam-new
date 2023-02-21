import React from "react";
import SEO from "@components/seo";
import ShopCta from "@components/cta";
import VedicArea from "@components/Vedic Values";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const Vedic = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"About"} />
      <Header style_2={true} />
      <VedicArea />
      <ShopCta />
      <Footer />
    </Wrapper>
  );
};

export default Vedic;

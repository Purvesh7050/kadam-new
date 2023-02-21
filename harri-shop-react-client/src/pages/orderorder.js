import React from "react";
import SEO from "@components/seo";
import ShopCta from "@components/cta";
import OrderArea from "@components/orderorder";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const Orderorder = ({}) => {
  return (
    <Wrapper>
      {/* <SEO pageTitle={"About"} /> */}
      <Header style_2={true} />
      <OrderArea/>
    </Wrapper>
  );
};

export default Orderorder;

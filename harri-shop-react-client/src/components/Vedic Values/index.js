import React from "react";
// internal
import TextArea from "./text-area";
import Services from "./services";
import AboutGallery from "./about-gallery";
import AboutFaqs from "./about-faqs";
import Teams from "@components/teams";
import Brands from "@components/brands";
import Awards from "@components/awards";
import BreadcrumbTwo from "@components/common/breadcrumb/breadcrumb-2";

const Vedic = () => {
  return (
    <React.Fragment>
      <BreadcrumbTwo
        subtitle="Importance of"
        title={
          <>
            Vedic Values
          </>
        }
      />
      <TextArea />
      {/* <Services /> */}
      {/* <AboutGallery /> */}
      {/* <Awards /> */}
      {/* <AboutFaqs /> */}
      {/* <Teams /> */}
      {/* <Brands /> */}
    </React.Fragment>
  );
};

export default Vedic;

import React from "react";
// internal

const PrdDetailsDescription = ({product}) => {
  return (
    <div className="product__details-description pt-95">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-description-content">
            <h3 className="product-desc-title">{product?.title}</h3>
            <p>
              {product?.description}
            </p>
            <p>
              {product?.a}
            </p>
            <p>
              <h4 style={{color:"black", fontFamily:"Roboto"}}>
                Specifications:-
                </h4>
              {product?.s}
            </p>
            <p>
              <h4 style={{color:"black", fontFamily:"Roboto"}}>
                Benefits of this Yantra:-
                </h4>
              {product?.b}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsDescription;

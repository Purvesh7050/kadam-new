import React, { useState } from "react";
import { useGetUserOrderByIdQuery } from "src/redux/features/orderApi";

// internal

// const [status, setStatus] = useState("Pending");

const Orderorder = ({orderData}) => {
  return (
    <React.Fragment>
      <div>
                    {/* <AccountTreeIcon /> */}
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>
    </React.Fragment>
  );
};

export default Orderorder;

import React from "react";
import ToursComplete from "./ToursComplete";
function Tours(props) {
  const { tours, deleteItems } = props;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        Our Tours
      </h1>
      <hr style={{ width: "150px", height: "4px", backgroundColor: "green" }} />
      <div style={{marginTop: "50px"}}>
        {tours.length > 0
          ? tours.map((tour) => {
              return <ToursComplete key={tour.id} {...tour} deleteItems={deleteItems}/>;
            })
          : null}
      </div>
    </>
  );
}

export default Tours;

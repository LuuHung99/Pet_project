import React from "react";

function detailReminder({people}) {
  return (
    <>
      {people.map((person) => {
        const { id, url, name, old } = person;
        return (
          <div className="person" key={id}>
            <div className="person_img">
              <img className="img" src={url} alt="" />
            </div>
            <div className="person__name">
              <h4>
                <b>{name}</b>
              </h4>
              <p>{old}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default detailReminder;

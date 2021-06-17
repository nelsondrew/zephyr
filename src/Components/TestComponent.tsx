import React, { ReactElement, useEffect, useState } from "react";
import { db } from "../utils/firbase";

export default function TestComponent(): ReactElement {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    db.collection("TeamMates")
      .get()
      .then((snapshot) => {
        var a = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
          a.push(doc.data());
        });
        setTeam(a);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div>Team Mates</div>
      {team.length > 0 && (
        <>
          {team.map((item) => (
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "5px" }}>{item.Name}</div>
              <div style={{ marginLeft: "5px" }}>{item.Age}</div>
              <div style={{ marginLeft: "5px" }}>{item.Company}</div>
              <div style={{ marginLeft: "5px" }}>{item.Expertise}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

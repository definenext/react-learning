import React, { useState, useEffect } from "react";

const First = () => {
  const [company, setCompany] = useState("Ionic");
  const [data, setData] = useState([]);

  const changeCompanyName = (event) => {
    event.preventDefault();
    setCompany("Digital Labs");
  };

  //Acts as a component did mount
  useEffect(() => {
    console.log("called first");
    setTimeout(() => {
      setData([
        {
          name: "Rohit",
        },
        {
          name: "Kapil",
        },
      ]);
    }, 1000);
  }, []);

  //Acts as a component did update
  useEffect(() => {
    console.log("called with data");
  }, [data]);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>state: {company}</p>
      <button onClick={changeCompanyName}>Change Company Name</button>
      {data.length === 0 ? (
        <p>loading...</p>
      ) : (
        data.map((student, index) => {
          return <h3 key={index}>{student.name}</h3>;
        })
      )}
    </div>
  );
};

export default First;

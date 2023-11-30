import React, { useState } from "react";
import { Chart } from "react-google-charts";
import useArticles from "../../hooks/useArticles";
const StatsChart = () => {
  const [particularBooks, setParticularBooks] = useState();
  const [empirePublications, setEmpirePublications] = useState();
  const [publicPress, setPublicPress] = useState();
  const [article, , refetch] = useArticles();
  const { publisherName } = article;
  // const publicationLength = publisherName.length;
  // console.log(publicationLength);
  // {
  //   article.map((article, index) =>  article.publisherName === "Particular Books" ?
  //    (<div key={article._id} >setParticularBooks(index)</div>):null

  // )}

  console.log(empirePublications);
  console.log(particularBooks);
  // {
  //   article.map((article, index) =>  article.publisherName === "Particular Books" ?
  //    (<div key={article._id} >{setPublicPress(index)}</div>

  //   ): article.publisherName === "Empire Publications" ?   (<div key={article._id} >setParticularBooks(index)</div>

  //   ): article.publisherName === "Public Press" ?   (<div key={article._id} >setParticularBooks(index)</div> ): null
  // )}
  const data = [
    ["Task", `${article.length}`],
    ["Work", 1],
    ["Eat", 12],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default StatsChart;

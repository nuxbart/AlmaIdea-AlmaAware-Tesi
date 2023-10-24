<script>
    import * as d3 from "d3";
import { getkeynumberData } from "../../assets/data/service";

    export default {
  data() {
    return {};
  },
  mounted() {
    const width = 800;
    const height = 500;
    const data = [
    { date: "2015", amount: 1381404},
    { date: "2016", amount: 824067},
    { date: "2017", amount: 422130},
    { date: "2018", amount: 314079},
    { date: "2019", amount: 310544},
    { date: "2020", amount: 265730},
    { date: "2021", amount: 293996}
]
    const svg = d3.select("svg").attr("width", width).attr("height", height);
    const g = svg.append("g");

    //2. Creating the Chart Axes
    const x = d3 .scaleTime()
      .domain(
        d3.extent(data, function (d) {
          //return parseTime(d.date);
          return d.date;
        })
      )
      .rangeRound([0, width]);

    const y = d3.scaleLinear()
      .domain(
        d3.extent(data, function (d) {
          return d.amount;
        })
      )
      .rangeRound([height, 0]);

    //4. Creating a Line
    const line = d3
      .line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.amount);
      });

    //5. Appending the Axes to the Chart
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
      

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");    

    //6. Appending a path to the Chart
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  },
};
</script>

<template>
    <h1>test</h1>
    <svg></svg>
</template>

<style scoped>
</style>
import { AgChartsReact } from "ag-charts-react";
import React, { useState } from "react";

export default function Chart() {
  const data = [
    { month: "2004", blogPosts: 1000, siteVisits: 400 },
    { month: "2005", blogPosts: 1170, siteVisits: 460 },
    { month: "2006", blogPosts: 660, siteVisits: 1120 },
    { month: "2007", blogPosts: 1030, siteVisits: 540 },
    { month: "2008", blogPosts: 1060, siteVisits: 590 },
    { month: "2009", blogPosts: 1130, siteVisits: 640 },
    { month: "2010", blogPosts: 1230, siteVisits: 740 },
    { month: "2011", blogPosts: 1330, siteVisits: 840 },
    { month: "2012", blogPosts: 1430, siteVisits: 940 },
    { month: "2013", blogPosts: 1530, siteVisits: 980 },
    { month: "2014", blogPosts: 1030, siteVisits: 440 },
    { month: "2015", blogPosts: 1130, siteVisits: 180 },
  ];

  const [options, setOptions] = useState({
    autoSize: true,
    data: data,
    // animation: {
    //   enabled: true,
    //   duration: 1000,
    // },
    title: {
      text: "Blog Posts at Glance",
      fontSize: 20,
      color: "#008DDA", // Title text color
    },
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "blogPosts",
        yName: "Blog Posts",
        stacked: true,
        fillOpacity: 0.7,
      },
      {
        type: "area",
        xKey: "month",
        yKey: "siteVisits",
        yName: "Site Visits",
        stacked: true,
        fillOpacity: 0.7,
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Month",
          fontSize: 14,
          color: "white", // Horizontal axis title color
        },
        label: {
          fontSize: 12,
          color: "white", // Horizontal axis label color
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Total",
          fontSize: 14,
          color: "white", // Vertical axis title color
        },
        label: {
          fontSize: 12,
          color: "white", // Vertical axis label color
        },
      },
    ],
    legend: {
      item: {
        label: {
          color: "white", // Legend text color for all items
          fontSize: 14,
        },
      },
    },
    background: {
      fill: "rgba(0,0,0,0)", // Background color
    },
  });

  return <AgChartsReact options={options} />;
}

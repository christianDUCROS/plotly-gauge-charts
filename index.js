
var data1 = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 23,
    title: { text: "Temperature" },
    type: "indicator",
    mode: "gauge+number+delta",
    delta: { reference: 25 },
    gauge: {
      axis: { range: [null, 45] },
      steps: [
        { range: [0, 18], color: "lightgray" },
        { range: [18, 27], color: "darkgray" },
        { range: [27, 35], color: "gray" },
        { range: [35, 45], color: "black" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 32
      }
      
    }
  }
];
var layout1 = { width: 400, height: 300, margin: { t: 0, b: 0 }};

var data2 = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 55,
    title: { text: "Humidité" ,font: { color: "darkblue"},},
    type: "indicator",
    mode: "gauge+number+delta",
    delta: { reference: 50 },
    gauge: {
      axis: { range: [null, 100] },
      bar: { color: "darkblue" },
      steps: [
        { range: [0, 45], color: "lightgray" },
        { range: [45, 65], color: "darkgray" },
        { range: [65, 85], color: "gray" },
        { range: [85, 100], color: "#9ACD32" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 75
      }
      
    }
  }
];
var layout2 = { width: 400, height: 300, margin: { t: 0, b: 0 } };

var data3 = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 1013,
    title: { text: "Pression" },
    type: "indicator",
    mode: "gauge+number+delta",
    delta: { reference: 1013 },
    gauge: {
      axis: { range: [950, 1050] },
      steps: [
        { range: [950, 1000], color: "#48D1CC" },
        { range: [1000, 1050], color: "#FFA500"}
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 1030
      }
      
    }
  }
];
var layout3 = { width: 400, height: 300, margin: { t: 0, b: 0 } };

var data4 = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 75,
    title: { text: "Vitesse",font: { size: 50 } },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [0, 200] },
      steps: [
        { range: [0, 80], color: "lightgray" },
        { range: [80, 90], color: "darkgray" },
        { range: [90, 110], color: "gray" },
        { range: [110, 130], color: "black" }
      ],
      threshold: {
        line: { color: "red", width: 4},
        thickness: 0.75,
        value: 130
      }
      
    }
  }
];
var layout4 = { width: 400, height: 300, margin: { t: 0, b: 0 }, font: { color: "red", family: "Arial" } };


Plotly.newPlot('myDiv1', data1, layout1);
Plotly.newPlot('myDiv2', data2, layout2);
Plotly.newPlot('myDiv3', data3, layout3);
Plotly.newPlot('myDiv4', data4, layout4);
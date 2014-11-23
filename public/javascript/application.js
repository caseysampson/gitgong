$(function () {
  var sin = [], cos = [];
  for (var i = 0; i < 14; i += 0.5) {
    sin.push([i, Math.sin(i)])
  }
  var plot = $.plot($("#placeholder"),
        [ { data: sin }, { data: cos } ], {
          series: {
            lines: { show: true },
            points: { show: true },
            color: '#b0007c'
          },
          grid: { hoverable: true, clickable: true },
          yaxis: { min: -1.2, max: 1.2 }
        });
  $("#placeholder").bind("plotclick", function (event, pos, item) {
      if (item) {
        $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
        plot.highlight(item.series, item.datapoint);
      }
  });

  setInterval(function () {alert("Hello")}, 3000);
});

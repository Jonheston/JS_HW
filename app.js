// Get a reference to the table body
var tbody = d3.select("tbody");


data.forEach(function(ufosighting) {
  console.log(ufosighting);
  var row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
 });

/////seems too easy. I might comeback and do the bonus challenge if time permits.
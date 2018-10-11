// Get a reference to the table body
var tbody = d3.select("tbody");


data.forEach(function(ufosighting) {
  // console.log(ufosighting);
  var row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
 });

var filter = d3.select("#filter-btn");
  filter.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = data.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData);
    
    filteredData.forEach(function(ufosighting) {
    // console.log(ufosighting);
    var row = tbody.append("tr");
  
    Object.entries(ufosighting).forEach(function([key, value]) {
      // console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
   });
  });

  ///Almost there. Right now its appeneding the filtered data to the end of the unfiltered data. I just need to figure out how to clear the data and append to a blank table
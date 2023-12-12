//javascript

//since labels are text so we will be appending the text on top of each bar

//axes
d3.axisTop()
d3.axisRight()
d3.axisBottom()
d3.axisLeft()

var dataset = [80,100,56,120,180,30,40,120,160];
//var dataset = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var margin = { top: 10, right: 10, bottom: 30, left: 50 }; // Adjusted margins

var svg = d3.select('svg')
    .attr("width", svgWidth + margin.left + margin.right) // Adjusted width
    .attr("height", svgHeight + margin.top + margin.bottom); // Adjusted height

/*6. Scales
         Scales are functiom which will transform data by either 
         increasing or decreasing the values for better visualizations.
*/

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

var xScale = d3.scaleLinear()
    .domain([0, dataset.length])
    .range([0, svgWidth]);


    var x_axis = d3.axisBottom()
    .scale(xScale);

var y_axis = d3.axisLeft()
    .scale(yScale);

svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") // Adjusted transform
    .call(y_axis);

// Append x-axis
svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + (svgHeight + margin.top) + ")")
    .call(x_axis);



//bar charts are nothing but rectangles
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d){
        return svgHeight - yScale(d) + margin.top;   //we get the y attribute by subtracting svg height
    })

    .attr("height", function(d) {
        return yScale(d);   //returning data value from call back function
    })

    .attr("width", barWidth - barPadding)  //providing barwidth, barWidth - barPadding
    .attr("transform", function(d, i){
        var translate = "translate(" + (barWidth * i + margin.left) + ", 0)";    //translating one after another 
        return translate;
    })
    
    //d3 provide with lots of option to transform objects
 

    //5. Creating Labels

    var text = svg.selectAll("text")
        .data(dataset)
        .enter()   //this 2will bring data one by one for further processing
        .append("text")
        .text(function(d){
            return d;
        })

        .attr("y", function(d){
            return svgHeight - yScale(d) + margin.top - 2; // Adjusted to leave space between text and bar top
        })
        .attr("x", function(d, i){
            return barWidth * i + margin.left + (barWidth - barPadding) / 2; // Corrected to use barWidth instead of svgHeight
        })

        .attr("fill", "#A64C38")

        /*6. Scales
         Scales are functiom which will transform data by either 
         increasing or decreasing the values for better visualizations.
        */

        //  7. Axes
        //Axes are integral part of any bar or chart, axes are made of lines and texts. 
        //D3.js provide simple way to create axes with charts

        /* 8. Creating SVG elements
        SVG - Scalable Vector Graphics, SVG is a power tool to define vector graphics for the web.
        Using SVG we can create different shapes and apply different styles to them
        */
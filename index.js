// javascript

//2. Selection and manipulation
d3.select();
d3.selectAll(); 

d3.select('h1').style('color','red')
.attr('class','heading')
.text('Updated hi tag');

// d3.select('body').append('p').text('First Paragraph');
// d3.select('body').append('p').text('Second Paragraph');
// d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color','blue')

//3. Data Loading and Binding
var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')   //no paragraph tag --> return empty selection
    .data(dataset)    //put data into the waiting state for further processing
    .enter()         //this method will take data items one by one and then perform further operations
    .append('p')  //appends paragraph for each element
    .text('D3 is awesome!');
    //.text(function(d) {return d;});

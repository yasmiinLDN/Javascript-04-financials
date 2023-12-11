var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// You have been given a dataset composed of arrays with two fields, Date and Profit / Losses.

// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The total number of months included in the dataset.

var months = finances.length;

/// ANSWER IS 86 MONTHS ////

// The net total amount of Profit / Losses over the entire period.

let totalProfitLoss = 0;

for (let i = 0; i < finances.length; i++) { // CHECK IF IT SHOULD BE <= OR JUST < AS SHOWN
  const arrayPosition = finances[i];
  const numbers = arrayPosition[1];
  totalProfitLoss += numbers
}

console.log("The total profit/loss is £" + totalProfitLoss);


// The total number of months included in the dataset/

// The average of the changes in Profit / Losses over the entire period.
// Need a variable to track the average change
// That will make use of the current & previous variables we set up before
// You will need to track what the total change in Profit / Losses are from month to month and then find the average.
// (Total / (Number of months - 1))

var averageChange = Math.round((totalProfitLoss / (finances.length - 1)) * 100) / 100


console.log("The average change is $" + averageChange);


// create a loop which accounts for each element: month, year, amount(profit/loss)
// create additional (new) variables which are included in the for loop to store the information (as above)
// determine the greatest increase/decrease in one month COMPARED TO THE ONE BEFORE --> comparing one month to the next (what's the change?) --> conditional statements required to identify the value of one month and then look at the following month amount --> if more than = profit; if less than = loss.
// variables needed (to store information): current month, amount at current month, difference between current and previous.
// No need for nested for loop BUT for future --> change index (loop 1 = i, loop 2 = j)
// One for loop with multiple conditional statements.


var months;
let rollingTotal = 0;
let greatestIncrease = 0;
let greatestLoss = 0;

// variables declared inside the loop:
// current data point
// previous data point

// variables:
// total number of months (above)
// rolling total of profits
// greatest increase (month & amt)
// greatest loss (month & amt)
// average of the changes


for (let i = 0; i < finances.length-2; i++) {
  const arrayPosition = finances[i];
  const numbers = arrayPosition[0];
  const Date = arrayPosition[1];
  
  if() {
    rollingTotal++;
  }
}

// LAURA'S PSEUDOCODE BELOW
// The greatest increase in Profit / Losses(date and amount) over the entire period.
// Need a variable for the greatest increase
// On each iteration, compare the current change in profits/losses to what's currently stored
// If the change is more, replace what's currently stored in the variable

// The greatest decrease in Profit / Losses(date and amount) over the entire period.
// Need a variable for the greatest decrease
// On each iteration, compare the current change in profits/losses to what's currently stored
// If the loss is greater, replace what's currently stored in the variable

// variables:
// total number of months
// rolling total of profits
// greatest increase (month & amt)
// greatest loss (month & amt)
// average of the changes

// variables declared inside the loop:
// current data point
// previous data point



/// FINAL CODE BELOW

console.log(`Financial Analysis
-----------------------------
Total number of months = ${months}
Total amount of profit = ${totalProfitLoss}
Average Change: ${averageChange}
Greatest increase (Month , Amount) = 
Greatest loss (Month , Amount) = 
Average of the changes =
`)

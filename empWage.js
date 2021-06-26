const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

/**
 * this is function to to get working hours daily based on the type of employee.
 * @param {*} empCheck 
 * @returns employee hours
 */
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
            break;
        default:
            return 0;
    }
}

/**
 * this is function calculate employee wage according to employee hours
 * @param {*} empHrs 
 * @returns employee wage
 */
function calculateWage(empHrs) {
    return WAGE_PER_HOUR * empHrs;
}

let totalEmpHrs = 0;
let toatlWorkingDays = 0;

// declaration of array to store daily wage of employee
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && toatlWorkingDays < NUM_OF_WORKING_DAYS) {
    toatlWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHr = getWorkingHours(empCheck);
    totalEmpHrs += empHr;
    empDailyWageArr.push(calculateWage(empHr))
}

let empWage = calculateWage(totalEmpHrs); 

console.log(" The total employees hour is : " + totalEmpHrs +" hr\nTotal Working Days is : " + toatlWorkingDays + 
            " \nAnd Employee wage is : " + empWage + " Rs")

// Array Helper Functions

/**
 * this function is for do sum of daily employee wage.
 * @param {*} dailyWage 
 * @returns sum of employee wage
 */
 let totalEmpWage = 0;
function sum(dailyWage) {
    return totalEmpWage += dailyWage; 
}

/**
 * Calculating total employee wage by using forEach transversal method
 */
empDailyWageArr.forEach(sum);
console.log("\ncalculation of total employee wage by using forEach method:- ")
console.log("The total employees hour is : " + totalEmpHrs +" hr\nTotal Working Days is : " + toatlWorkingDays + 
            " \nAnd Employee wage is : " + totalEmpWage + " Rs")

/**
 * calculating toatal employee wage by using reduce method.
 * @param {*} totalWage 
 * @param {*} dailyWage 
 * @returns total employe wage.
 */
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalEmpWageByReduceMethod = empDailyWageArr.reduce(totalWages, 0)

console.log("Total employee Wage with reduce method: " + totalEmpWageByReduceMethod + " Rs");

/**
 * this is method to store Day along with Daily wage using Array map helper method
 * @param {*} dailyWage 
 * @returns 
 */
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter ++;
    return "Day-" + dailyCounter + "-Wage is = "+ dailyWage;
}

// Array map method
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map :-");
console.log(mapDayWithWageArr);

/**
 * this is method to show full time wage of 160 were earned.
 * @param {*} dailyWage 
 * @returns 
 */
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

//Use of fileter method to filter wage earned 160
let fulltimeArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned");
console.log(fulltimeArr);

//Find first occurance when Fulltime wage was earned bu using find method
console.log("First time full time Wage was earned day is : ");
console.log(mapDayWithWageArr.find(fulltimeWage));

/**
 * this is method to Check if Every element of full time wage is truly holding full time wage
 * @param {*} dailyWage 
 * @returns booean type
 */
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check all element have Full Time Wage:-")
console.log(fulltimeArr.every(isAllFulltimeWage));

/**
 * this is method to Check If there is any Part time Wage
 * @param {*} dailyWage 
 * @returns 
 */
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("60");
}
console.log("Check is any Part time Wage:");
console.log(mapDayWithWageArr.some(isAnyPartTimeWage));

/**
 * this is function to find number of days employee worked
 * @param {*} numOfDays 
 * @param {*} dailyWage 
 * @returns 
 */
function totalDaysworked(numOfDays, dailyWage) {
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("Number of days employee worked:")
console.log(empDailyWageArr.reduce(totalDaysworked, 0));

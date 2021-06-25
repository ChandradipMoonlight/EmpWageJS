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

let totalEmpWage = calculateWage(totalEmpHrs); 

console.log(" The total employees hour is : " + totalEmpHrs +" hr\nTotal Working Days is : " + toatlWorkingDays + 
            " \nAnd Employee wage is : " + totalEmpWage + " Rs")

console.log("Daily employee wages are = " + empDailyWageArr);


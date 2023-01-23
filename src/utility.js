import dayjs from "dayjs";
// using dayjs to easily manipulate time.

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    // first part of two dimenion array = days Matrix
    // new array is creating a 1 row currently to display for dashboard.  it will then map another array which will be 7 columns for each day of the week. 
    const daysMatrix = new Array(1).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}
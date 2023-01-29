// import dayjs from "dayjs";
// export function getCurrentDate(month = dayjs().month()) {
//     month = Math.floor(month);// cant remember
//     const year = dayjs().year();
//     // const day = dayjs().day();
//     // console.log(day, 'a')
//     const dateOfDay = dayjs().date()
//     // console.log(dateOfDay, 'c')
//     const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
//     // console.log(firstDayOfTheMonth, 'b')
//     let currentMonthCount = 0 - firstDayOfTheMonth;
//     const daysMatrix = new Array(1).fill([]).map(() => {
//         return new Array(7).fill(null).map(() => {
//             console.log(currentMonthCount, 'trying to figure it out')
//             currentMonthCount++;
//             return dayjs(new Date(year, month, currentMonthCount));
//         });
//     });
//     console.log(daysMatrix, 'd')
//     return daysMatrix;
// }

// export function getCurrentDate() {
//     const month = dayjs().month()
//     const day = dayjs().day()
//     const year = dayjs().year()
//     // const firstDayOfTheMonth = dayjs(new Date(year,month, 1).day())
//     console.log(month)
//     const today = new Date()
//     let selectWeek = [];
//     for (let i = 0; i < 7; i++) {
//         let weekday = new Date(today) // clone the selected date,  we don't musotate it accidentally.
//         let selectedWeekdayIndex = today.getDay() // i.e. 5 for friday
//         let selectedDay = today.getDate() // 1-31, depending on the date
//         weekday.setDate(selectedDay - selectedWeekdayIndex + i)
//         // selectWeek = new Array([...selectWeek, weekday])

//         selectWeek = [...selectWeek, weekday]
//     }
//     let currentWeek = Array.from(selectWeek)
//     // console.log(selectWeek)
//     console.log(currentWeek, 'after from()')
//     return currentWeek;
// }






// export function getCurrentDate() {

//     const today = new Date()
//     let selectWeek = [];
//     for (let i = 0; i < 7; i++) {
//         let weekday = new Date(today) // clone the selected date,  we don't musotate it accidentally.
//         let selectedWeekdayIndex = today.getDay() // i.e. 5 for friday
//         let selectedDay = today.getDate() // 1-31, depending on the date
//         weekday.setDate(selectedDay - selectedWeekdayIndex + i)
//         // selectWeek = new Array([...selectWeek, weekday])

//         selectWeek = [...selectWeek, weekday]
//     }
//     let currentWeek = new Array(selectWeek)
//     // console.log(selectWeek)
//     console.log(currentWeek[0][1])
//     return currentWeek;
// }


    // let day;
    // let week = []
    // const today = new Date()
    // const dateNow = new Date();
    // // need to change and state and create a possible utility.
    // for (let i = 0; i < 7; i++) {
    //     week.push(dateNow)
    //     if (week[0] === dateNow) {
    //         dateNow.setDate(dateNow.getDate() + 1);

    //         day = dateNow.toLocaleDateString();
    //         console.log(day)
    //         week.push(day)
    //             ;
    //     }

    //     return [today, week];
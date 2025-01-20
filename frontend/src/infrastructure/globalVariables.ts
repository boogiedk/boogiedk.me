export const startWork = new Date("2018-07-01");
export const birthDate = new Date("1998-01-19");

export const dateTimeNow = new Date();

const millisecondToYearConstant = 31536000000

export function getWorkExperience() {
    let time = dateTimeNow.getTime() - startWork.getTime();
    return Math.floor(time / millisecondToYearConstant)
}

export function getYearsOld() {
    let time = dateTimeNow.getTime() - birthDate.getTime();
    return Math.floor(time / millisecondToYearConstant)
}
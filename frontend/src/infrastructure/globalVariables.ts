export const startWork = new Date("2018-07-01");
export const birthDate = new Date("1998-01-19");

export const dateTimeNow = new Date();

export function getWorkExperience() {
    return dateTimeNow.getFullYear() - startWork.getFullYear();
}

export function getYearsOld() {
    return dateTimeNow.getFullYear() - birthDate.getFullYear();
}
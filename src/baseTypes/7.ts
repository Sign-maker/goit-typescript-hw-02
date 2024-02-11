/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

    5.1 Sunday.
    5.2 Monday.
    5.3 Tuesday.
    5.4 Wednesday.
    5.5 Thursday.
    5.6 Friday.
    5.7 Saturday.  */
const enum DaysOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) return true;
  return false;
}

isWeekend(DaysOfWeek.Friday);

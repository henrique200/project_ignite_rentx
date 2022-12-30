import { addDays } from "date-fns";

export function getPlatfromDate(date: Date): Date {
  return addDays(date, 1);
}

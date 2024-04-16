import type {Travel} from "~/types/travel";

export const MAX_DESCRIPTION_LENGTH = 80;
const SECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

export const useTravelItem = (travel: Travel) => {
  const excerpt = travel.description.length > MAX_DESCRIPTION_LENGTH
      ? `${travel.description.substring(0, MAX_DESCRIPTION_LENGTH - 3)}...`
      : travel.description;

  const startDate = new Date(travel.dates.departure);
  const endDate = new Date(travel.dates.return);
  // todo: maybe add a check for the date validity
  const duration = Math.round((endDate.getTime() - startDate.getTime()) / SECONDS_IN_A_DAY);

  return {
    excerpt,
    dates: {
      start: startDate,
      end: endDate,
      duration
    }
  }
}
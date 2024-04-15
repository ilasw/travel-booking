import type {Travel} from "~/types/travel";

const MAX_DESCRIPTION_LENGTH = 80;

export const useTravelItem = (travel: Travel) => {
  const excerpt = travel.description.length > MAX_DESCRIPTION_LENGTH
      ? `${travel.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
      : travel.description;

  const startDate = new Date(travel.dates.departure);
  const endDate = new Date(travel.dates.return);
  const duration = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return {
    excerpt,
    startDate,
    endDate,
    duration
  }
}
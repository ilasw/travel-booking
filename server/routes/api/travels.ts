import {mockTravelItem} from "~/features/tests/mocks";
import {H3Event} from "h3";


const travels = getInitialTravels();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const travelId = Number(query?.travelId);

  const getTravelIndex = (travelId: number) => travels.findIndex(travel => travel.id === travelId);

  if (event.method === 'POST') {
    const body = await readBody(event);
    const maxId = Math.max(...travels.map(travel => travel.id));
    const travel = {
      ...body,
      id: maxId + 1,
      slug: body.name.toLowerCase().replace(/\s/g, '-'),
    };

    travels.push(travel);
    return travel;
  }

  if (event.method === 'GET') {
    if (travelId) {
      return travels.find(travel => travel.id === travelId);
    }

    return travels;
  }

  if (event.method === 'PUT') {
    const body = await readBody(event);
    const index = getTravelIndex(travelId)
    travels[index] = body;
    return body;
  }

  if (event.method === 'DELETE') {
    const index = getTravelIndex(travelId)
    travels.splice(index, 1);
    return index;
  }

  return travels;
});

function getInitialTravels() {
  const fakeTravelNames = [
    "Travel to the Moon",
    "Travel to Mars",
    "Travel to Venus",
    "Travel to Jupiter",
  ];

  return Array.from({length: 4}, (_, index) => {
    const name = fakeTravelNames[index % fakeTravelNames.length];
    const slug = name.toLowerCase().replace(/\s/g, '-');
    return ({
      ...mockTravelItem,
      id: index + 1,
      name,
      slug,
      price: 100 * (index + 1),
    })
  });
}
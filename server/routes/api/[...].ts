import {mockTravelItem} from "~/features/tests/mocks";
import {H3Event} from "h3";


let travels = getInitialTravels();


export default defineEventHandler(async (event) => {
  const travelId = getIdFromEvent(event);

  if (event.method === 'POST') {
    const body = await readBody(event);
    const travel = JSON.parse(body);
    return travel;
  }

  if(event.method === 'GET') {
    if(travelId) {
      return travels.find(travel => travel.id === travelId);
    }

    return travels;
  }

  if(event.method === 'PUT') {
    const body = await readBody(event);
    const index = travels.findIndex(travel => travel.id === travelId);
    travels[index] = body;
    return body;
  }

  if(event.method === 'DELETE') {
    const index = travels.findIndex(travel => travel.id === travelId);
    travels.splice(index, 1);
    return null;
  }

  return travels;
});

function getIdFromEvent(event: H3Event) {
  const params = event.context.params?._;
  if(!params || !params.startsWith('travels/')) return null;

  return Number(params.split('/').at(-1));
}

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
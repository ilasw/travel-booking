// #
//
// *The travels should have some basic informations like name of the travel,
// dates of departure and return,
// a picture,
// a description of the tour,
// a price for a single person and an average user rating.*

export type Travel = {
  name: string
  dates: {
    departure: string
    return: string
  }
  image: {
    url: string
    alt: string
  }
  description: string
  price: number
  rating: {
    entries: number[],
    average: number
  }
}
import adidasSamba from "../assets/collection/adidas-samba.jpg"
import airJordan1 from "../assets/collection/air-jordan-1.jpg"
import converseChuck70 from "../assets/collection/converse-chuck-70.jpg"
import newBalance550 from "../assets/collection/new-balance-550.jpg"
import nikeAirForce1 from "../assets/collection/nike-air-force-1.jpg"
import nikeDunkLow from "../assets/collection/nike-dunk-low.jpg"

export type CollectionProduct = {
  name: string
  colorway: string
  image: string
  alt: string
}

export const collectionIntro = {
  title: "COLLECTION",
  body: "A curated selection of standout sneakers, from timeless icons to the season's most sought-after pairs.",
}

export const collectionGroups: {
  lead: string
  accent: string
  products: CollectionProduct[]
}[] = [
  {
    lead: "TOP",
    accent: "SELLERS",
    products: [
      {
        name: "Air Jordan 1 High",
        colorway: "HERITAGE RED",
        image: airJordan1,
        alt: "Air Jordan 1 High in heritage red, white, and black",
      },
      {
        name: "Adidas Samba OG",
        colorway: "CLOUD WHITE",
        image: adidasSamba,
        alt: "Adidas Samba OG in cloud white with black stripes",
      },
      {
        name: "Nike Dunk Low",
        colorway: "BLACK / WHITE",
        image: nikeDunkLow,
        alt: "Nike Dunk Low in black and white",
      },
    ],
  },
  {
    lead: "NEW",
    accent: "ARRIVALS",
    products: [
      {
        name: "New Balance 550",
        colorway: "WHITE / GREEN",
        image: newBalance550,
        alt: "New Balance 550 in white and green",
      },
      {
        name: "Converse Chuck 70",
        colorway: "BLACK / EGRET",
        image: converseChuck70,
        alt: "Converse Chuck 70 high-top in black and egret",
      },
      {
        name: "Nike Air Force 1 '07",
        colorway: "WHITE",
        image: nikeAirForce1,
        alt: "Nike Air Force 1 '07 in white",
      },
    ],
  },
]

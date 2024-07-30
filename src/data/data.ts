interface Card {
  id: number;
  name: string;
  image: string;
  description: string;
  travelDates: string;
  price: number;
}

const data: { cards: Card[] } = {
  cards: [
    {
      id: 1,
      name: "Tradition and Technology in Japan",
      image: "japan.jpg",
      description:
        "Experience the best of Japan with a mix of traditional and modern experiences.",
      travelDates: "15 Oct - 25 Oct",
      price: 0.1,
    },
    {
      id: 2,
      name: "Safari and Skyline South Africa",
      image: "africa.jpg",
      description:
        "Embark on an adventure through South Africa's breathtaking landscapes, combining thrilling safaris with vibrant cityscapes.",
      travelDates: "25 Aug - 5 Sep",
      price: 0.1,
    },
    {
      id: 3,
      name: "Hawaiian Paradise",
      image: "hawaii.jpg",
      description:
        "Discover the ultimate tropical escape in Hawaii, with pristine beaches, lush landscapes, and a rich cultural heritage.",
      travelDates: "1 May - 20 May",
      price: 0.1,
    },
  ],
};

export default data;

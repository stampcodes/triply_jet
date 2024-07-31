export interface Card {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string;
  travelDates: string;
  price: number;
}

const data: { cards: Card[] } = {
  cards: [
    {
      id: 1,
      name: "Tradition and Tech in Japan",
      image: "/japan.jpg",
      description:
        "Discover the best of Japan with traditional tea ceremonies, ancient temples, and modern technology in Tokyo.",
      details:
        "Immerse yourself in the best of Japan with a journey that combines ancient traditions and modern technologies. Start your adventure in Tokyo, exploring the vibrant Shinjuku district with its neon lights and dynamic atmosphere. Visit the Meiji Shrine for a taste of Japanese spirituality, followed by a traditional tea ceremony in a historic teahouse. Spend a full day in Akihabara, the heart of Tokyo's technology scene, discovering electronics stores and futuristic gadgets. Don't miss the incredible experience at teamLab Borderless, a digital interactive museum that blends art and technology in innovative ways. Conclude your evenings with dinners at traditional and panoramic restaurants, savoring delicious dishes like sushi and tempura, while enjoying the spectacular city lights.",
      travelDates: "15 Oct - 25 Oct",
      price: 0.01,
    },
    {
      id: 2,
      name: "Safari and Skyline South Africa",
      image: "/africa.jpg",
      description:
        "Embark on an adventure through South Africa's breathtaking landscapes, combining thrilling safaris with vibrant cityscapes.",
      details:
        "Explore the wonders of South Africa with a journey that combines the adventure of a safari with vibrant urban culture. Start in Johannesburg, visiting iconic sites like the Apartheid Museum and Constitution Hill for a deep understanding of the country's history. Stroll through the lively Maboneng district, rich in street art and trendy cafes. Then, embark on an exciting safari in Kruger National Park, where you can spot the 'Big Five' accompanied by expert rangers. Enjoy a lunch immersed in the wild nature within the park. Back in Johannesburg, explore local markets like Rosebank to purchase unique crafts. This trip offers a perfect balance between the adventure of the wild and cultural discoveries in the city.",
      travelDates: "25 Aug - 5 Sep",
      price: 0.01,
    },
    {
      id: 3,
      name: "Hawaiian Paradise",
      image: "/hawaii.jpg",
      description:
        "Discover the ultimate tropical escape in Hawaii, with pristine beaches, lush landscapes, and a rich cultural heritage.",
      details:
        "Discover tropical paradise Hawaii: pristine beaches, rich cultural heritage. Relax on Waikiki Beach, enjoy sunset, dinner with ocean view. Explore Oahu: Diamond Head crater, Pearl Harbor history. Relax North Shore beaches, waves, surfers. Discover Hawaiian culture: hula, ukulele workshops. Visit craft markets, unique souvenirs. Catamaran excursion: spot dolphins, sea turtles. Conclude with beachfront dinners, stunning sunsets, unforgettable paradise experience.",
      travelDates: "1 May - 20 May",
      price: 0.01,
    },
  ],
};

export default data;

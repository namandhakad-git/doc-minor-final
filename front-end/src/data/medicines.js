const medicineImages = [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    "https://images.unsplash.com/photo-1580281780460-82d2776dcb7c",
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
    "https://images.unsplash.com/photo-1588776814546-ec7e8cdd2b4c",
    "https://images.unsplash.com/photo-1576765607924-2c3a5b3b9f7a",
    "https://images.unsplash.com/photo-1582719478185-2196a7a3e0b2",
    "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
    "https://images.unsplash.com/photo-1597764690523-15bea4c581c9",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
  ];
  
  const names = [
    "Paracetamol",
    "Ibuprofen",
    "Amoxicillin",
    "Cough Syrup",
    "Vitamin C",
    "Aspirin",
    "Cetirizine",
    "Azithromycin",
    "Metformin",
    "Insulin"
  ];
  
  export const medicines = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]} ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 20,
    stock: i % 2 === 0 ? "In Stock" : "Limited",
    rating: (Math.random() * 2 + 3).toFixed(1),
    description: "Used for fever, pain, infection and general treatment.",
    location: "Pharmacy Store",
    image: medicineImages[i % medicineImages.length]
  }));
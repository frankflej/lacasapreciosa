export interface RoomData {
  id: string;
  name: string;
  type: 'deluxe' | 'executive';
  price: string;
  mainImage: string;
  images: string[];
  description: string;
  amenities: string[];
  size: string;
  maxOccupancy: string;
}

export type RoomsDataType = {
  [key: string]: RoomData;
}

export const roomsData: RoomsDataType = {
  "1": {
    id: "1",
    name: "Deluxe King Room",
    type: "deluxe",
    price: "120",
    mainImage: "https://ik.imagekit.io/pqgw24nd3/evrard_60.JPG?updatedAt=1751537863322",
    images: [
      "https://ik.imagekit.io/pqgw24nd3/evrard_60.JPG?updatedAt=1751537863322",
      "https://ik.imagekit.io/pqgw24nd3/evrard_61.JPG",
      "https://ik.imagekit.io/pqgw24nd3/evrard_62.JPG",
    ],
    description: "Experience luxury in our spacious Deluxe King Room, featuring modern amenities and elegant design.",
    amenities: [
      "King-size bed",
      "Private bathroom",
      "Free Wi-Fi",
      "Room service"
    ],
    size: "35 sq m",
    maxOccupancy: "2 Adults"
  },
  "2": {
    id: "2",
    name: "Deluxe King Room",
    type: "deluxe",
    price: "120",
    mainImage: "https://ik.imagekit.io/pqgw24nd3/evrard_45.JPG?updatedAt=1751537832863",
    images: [
      "https://ik.imagekit.io/pqgw24nd3/evrard_45.JPG?updatedAt=1751537832863",
      "https://ik.imagekit.io/pqgw24nd3/evrard_46.JPG",
      "https://ik.imagekit.io/pqgw24nd3/evrard_47.JPG",
    ],
    description: "Unwind in comfort in our Deluxe King Room, offering a perfect blend of style and functionality.",
    amenities: [
      "King-size bed",
      "Private bathroom",
      "Free Wi-Fi",
      "Room service"
    ],
    size: "35 sq m",
    maxOccupancy: "2 Adults"
  },
  "3": {
    id: "3",
    name: "Executive Suite",
    type: "executive",
    price: "150",
    mainImage: "https://ik.imagekit.io/pqgw24nd3/evrard_44.JPG?updatedAt=1751537832908",
    images: [
      "https://ik.imagekit.io/pqgw24nd3/evrard_44.JPG?updatedAt=1751537832908",
      "https://ik.imagekit.io/pqgw24nd3/evrard_42.JPG",
      "https://ik.imagekit.io/pqgw24nd3/evrard_41.JPG?updatedAt=1751537831989",
    ],
    description: "Indulge in luxury in our Executive Suite, featuring premium amenities and spectacular views.",
    amenities: [
      "King-size bed",
      "Private balcony",
      "Mini bar",
      "Free Wi-Fi",
      "24/7 Room service",
      "Premium toiletries"
    ],
    size: "50 sq m",
    maxOccupancy: "2 Adults + 1 Child"
  },
  "4": {
    id: "4",
    name: "Executive Suite",
    type: "executive",
    price: "150",
    mainImage: "https://ik.imagekit.io/pqgw24nd3/evrard_36.JPG?updatedAt=1751537818426",
    images: [
      "https://ik.imagekit.io/pqgw24nd3/evrard_36.JPG?updatedAt=1751537818426",
      "https://ik.imagekit.io/pqgw24nd3/evrard_48.JPG?updatedAt=1751537837898",
      "https://ik.imagekit.io/pqgw24nd3/evrard_38.JPG",
    ],
    description: "Experience ultimate luxury in our Executive Suite with panoramic views and exclusive amenities.",
    amenities: [
      "King-size bed",
      "Private balcony",
      "Mini bar",
      "Free Wi-Fi",
      "24/7 Room service",
      "Premium toiletries"
    ],
    size: "50 sq m",
    maxOccupancy: "2 Adults + 1 Child"
  }
} 
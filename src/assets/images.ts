

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'entrance' | 'rooms' | 'lake-view' | 'garden' | 'interior' | 'cave';
}

export const galleryCategories = [
  {
    id: 'entrance',
    name: 'Welcome & Entrance',
    description: 'Your journey begins at our welcoming entrance'
  },
  {
    id: 'rooms',
    name: 'Luxurious Rooms',
    description: 'Experience comfort in our thoughtfully designed rooms'
  },
  {
    id: 'lake-view',
    name: 'Lake Views',
    description: 'Breathtaking views of Lake Muhazi'
  },
  {
    id: 'garden',
    name: 'Gardens & Landscape',
    description: 'Explore our beautiful gardens and natural surroundings'
  },
  {
    id: 'cave',
    name: 'Cave & Entertainment',
    description: 'Experience our unique cave venue - perfect for music, dance, and entertainment'
  },
  {
    id: 'interior',
    name: 'Interior & Design',
    description: 'Discover our carefully curated interior spaces'
  }
] as const;

const galleryImages: GalleryImage[] = [
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_1.JPG?updatedAt=1751537755520",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_3.JPG?updatedAt=1751537760792",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_7.JPG?updatedAt=1751537760800",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_23.JPG?updatedAt=1751537793373",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_21.JPG?updatedAt=1751537787578",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_12.JPG?updatedAt=1751537770750",
    alt: "Hotel Entrance View",
    category: "entrance"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_35.JPG?updatedAt=1751537817042",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
    {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_37.JPG?updatedAt=1751537827238",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_44.JPG?updatedAt=1751537832908",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_60.JPG?updatedAt=1751537863322",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_45.JPG?updatedAt=1751537832908",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_42.JPG?updatedAt=1751537831650",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_41.JPG?updatedAt=1751537831989",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/La%20perla%20negra%20master%20Bathroom%20II.jpg?updatedAt=1742843602673",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_48.JPG?updatedAt=1751537837898",
    alt: "Luxury Room Interior",
    category: "rooms"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/IMG_2622.jpg?updatedAt=1748776523302",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_63.JPG?updatedAt=1751537870621",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_64.JPG?updatedAt=1751537869920",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_66.JPG?updatedAt=1751537869013",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_67.JPG?updatedAt=1751537866099",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/IMG_0479.jpg?updatedAt=1746472131940",
    alt: "Lake View Terrace",
    category: "lake-view"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/IMG_2589.jpg?updatedAt=1748460748555",
    alt: "Garden Pathway",
    category: "garden"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_16.JPG?updatedAt=1751537787885",
    alt: "Garden Pathway",
    category: "garden"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_15.JPG?updatedAt=1751537788102",
    alt: "Garden Pathway",
    category: "garden"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_78.JPG?updatedAt=1751538099921",
    alt: "Garden Pathway",
    category: "garden"
  },
    {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_7.JPG?updatedAt=1751537760800",
    alt: "Garden Pathway",
    category: "garden"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_14.JPG?updatedAt=1751537789234",
    alt: "Garden Pathway",
    category: "garden"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_68.JPG?updatedAt=1751537875070",
    alt: "Entertainment Cave - Dance Floor",
    category: "cave"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_69.JPG?updatedAt=1751537882878",
    alt: "Cave Music Area",
    category: "cave"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_77.JPG?updatedAt=1751538069289",
    alt: "Cave Entertainment Space",
    category: "cave"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_75.JPG?updatedAt=1751538098549",
    alt: "Cave Lounge Area",
    category: "cave"
  },
    {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_74.JPG?updatedAt=1751538258352",
    alt: "Cave Lounge Area",
    category: "cave"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/La%20perla%20negra%20Min%20Bar.jpg?updatedAt=1742843672148",
    alt: "Cave Lounge Area",
    category: "cave"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_53.JPG?updatedAt=1751537853550",
    alt: "Interior Design",
    category: "interior"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_55.JPG?updatedAt=1751537852959",
    alt: "Interior Design",
    category: "interior"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_56.JPG?updatedAt=1751537854147",
    alt: "Interior Design",
    category: "interior"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_33.JPG?updatedAt=1751537814560",
    alt: "Interior Design",
    category: "interior"
  },
  {
    src: "https://ik.imagekit.io/pqgw24nd3/evrard_24.JPG?updatedAt=1751537805154",
    alt: "Interior Design",
    category: "interior"
  },  {
    src: "https://ik.imagekit.io/pqgw24nd3/La%20perla%20negra%20Min%20Bar.jpg?updatedAt=1742843672148",
    alt: "Interior Design",
    category: "interior"
  },
  
  
  // Add all your images here with appropriate categories
];

export default galleryImages;
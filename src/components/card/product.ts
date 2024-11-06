type Products = {
  id: number;
  name: string;
  price: number;
  disc: number;
  initialStock: number;
  currentStock: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const products: Products[] = [
  {
    id: 1,
    name: 'Emporio Armani Three-Hand Date',
    price: 129000,
    disc: 55,
    initialStock: 100,
    currentStock: 10,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1080?product',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Griffed Three-Hand Solar-Powered',
    price: 201600,
    disc: 25,
    initialStock: 100,
    currentStock: 25,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1080?bottle',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 3,
    name: 'Tissot Seastar 1000 40 mm',
    price: 2499000,
    disc: 19,
    initialStock: 100,
    currentStock: 40,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1080?remote',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 4,
    name: 'Three-Hand Date Black Silicone',
    price: 110052,
    disc: 25,
    initialStock: 100,
    currentStock: 70,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1080?speaker',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
];

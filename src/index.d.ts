export interface IDataRestaurant {
  blurhash : string;
  city: string,
  currency: string,
  delivery_price: number,
  description: string,
  image: string,
  location: number[],
  name: string,
  online: boolean,
  tags: string[]
}

interface IPropRestaurant {
  name: string,
  description: string,
  delivery_price: number,
  blurhash: string,
  image: string,
}


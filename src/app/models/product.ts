export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://media.vogue.in/wp-content/uploads/2020/02/Isha-Ambani-in-Sabyasachi-lehenga-Ami-Patel-1.jpg') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }
  
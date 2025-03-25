/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

let age: number= 25;  

let name: string = "Alice";

let isActive: boolean = true; 

let nullableValue: string | null = null; // Строка или null

let numbers. number = [1, 2, 3, 4]; 

let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed: (string | number)[] = [1, "Alice", 2, "Bob"];

let colors: (string | number | boolean)[] = [123, "red", true, "blue"];

const add = (a: number, b: number): number => {
    return a - b;
  };

 // type Role = 'admin'| 'user'| 'guest';
 enum ROLE {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'}

  interface User {
    id: string | number;
    name: string;
    email: string;
    isActive: boolean;
    role: ROLE;
  }

  const objectuser: User = {
    id: 1,
    name: "John",
    email: "j0Y4W@example.com",
    isActive: true,
    role: "admin",
  };

  interface Products {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  }

  const products: Products[] = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 80, inStock: true },
  ];

  interface Book {
    id: string,
    title: string,
    price: number,
    rating: 4.8,
    inStock: true,
  }
interface Bookstore {
    name: string;
    location: string;
    books: Book[];
    customers: Customer[];
    settings: Settings;
  }

  const bookstore = {
    name: "The Grand Bookstore",
    location: "New York, USA",
    books: [
      {
        id: "B001",
        title: "The Hobbit",
        genre: Genre.Fantasy,
        price: 15.99,
        rating: 4.8,
        inStock: true,
      },
      {
        id: "B002",
        title: "1984",
        author: { id: 2, name: "George Orwell", birthYear: 1903, country: "UK" },
        genre: Genre.Fiction,
        price: 12.5,
        rating: 4.7,
        inStock: false,
      },
    ],
    customers: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
      settings: {
      currency: "USD",
      isOpen: true,
      discountRate: 10, // 10% скидка
    },
  };

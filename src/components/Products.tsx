import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "FRESH  COW'S MILK",
    description: "Pure, pasteurized milk from grass-fed cows. Fresh from morning hours.",
    price: "Nu. 80",
    image: "/images/milk.jpg",
    category: "Milk"
  },
  {
    id: 2,
    name: "TRADITIONAL DATSHI CHEESE",
    description: "Our signature cheese, made using century-old techniques. Perfect for ema datshi.",
    price: "Nu. 500",
    image: "/images/cheese.jpg",
    category: "Cheese"
  },
  {
    id: 3,
    name: "GREEK YOGURT",
    description: " We also have Serkar Greek Yogurts which come in three flavours, each unique to bring the best flavour and taste.",
    price: "Nu. 55",
    image: "/images/products yougart.jpg",
    category: "Yogurt"
  },
  {
    id: 4,
    name: "HIGHLAND BUTTER",
    description: "Hand-churned butter from the milk of cows grazing in high altitudes.",
    price: "Nu. 600",
    image: "/images/butter.jpg",
    category: "Butter"
  },
  {
    id: 5,
    name: "Butter Milk",
    description: "100% natural buttermilk, a refreshing byproduct of our traditional cheese-making process.",
    price: "Nu. 50",
    image: "/images/butter milk.jpg",
    category: "Specialty"
  },
  {
    id: 6,
    name: "Curd(dahi)",
    description: "Naturally sweetened milk with cardamom and saffron. A traditional delicacy.",
    price: "Nu. 80",
    image: "/images/crud.jpg",
    category: "Curd"
  },
  {
    id: 7,
    name: "Aged Mountain Cheese(Zoetey)",
    description: "Zoetey, the highland specialty.",
    price: "Nu. 400",
    image: "/images/zoety.jpg",
    category: "Cheese"
  },
  {
    id: 8,
    name: "KARMAY-MA",
    description: "cow's butter(karmay-ma).",
    price: "Nu. 430",
    image: "/images/karma may.jpg",
    category: "Butter"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-dairy-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dairy-brown mb-6">Our Products</h2>
          <div className="w-20 h-1 bg-dairy-light-green mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dairy-brown">
          Discover our range of authentic dairy products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card border-none overflow-hidden rounded-2xl shadow-lg">
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-dairy-green text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-dairy-brown mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-dairy-green font-bold text-lg">{product.price}</span>
                  <Link to={`/products/${product.id}`}>
                    <button className="text-dairy-brown border border-dairy-brown hover:bg-dairy-brown hover:text-white transition-colors px-4 py-2 rounded-full text-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

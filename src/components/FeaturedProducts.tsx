
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/pages/Index";

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Radiance Serum",
    price: 89,
    image: "/placeholder.svg",
    category: "Skincare",
    description: "Illuminating vitamin C serum for glowing skin"
  },
  {
    id: 2,
    name: "Rose Gold Highlighter",
    price: 42,
    image: "/placeholder.svg",
    category: "Makeup",
    description: "Luxurious highlighter for a natural glow"
  },
  {
    id: 3,
    name: "Bloom Perfume",
    price: 125,
    image: "/placeholder.svg",
    category: "Fragrance",
    description: "Elegant floral fragrance with rose and peony"
  }
];

export const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved beauty essentials, carefully selected for their 
            exceptional quality and transformative results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group cursor-pointer border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="text-sm text-pink-600 font-medium">{product.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                    <Button 
                      onClick={() => onAddToCart(product)}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

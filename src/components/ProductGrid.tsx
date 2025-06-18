
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const allProducts: Product[] = [
  // Skincare
  {
    id: 4,
    name: "Hydrating Cleanser",
    price: 28,
    image: "/placeholder.svg",
    category: "Skincare",
    description: "Gentle foaming cleanser with hyaluronic acid"
  },
  {
    id: 5,
    name: "Anti-Aging Cream",
    price: 95,
    image: "/placeholder.svg",
    category: "Skincare",
    description: "Rich moisturizer with peptides and retinol"
  },
  {
    id: 6,
    name: "Vitamin E Oil",
    price: 35,
    image: "/placeholder.svg",
    category: "Skincare",
    description: "Nourishing facial oil for all skin types"
  },
  // Makeup
  {
    id: 7,
    name: "Liquid Foundation",
    price: 48,
    image: "/placeholder.svg",
    category: "Makeup",
    description: "Full coverage foundation with SPF 15"
  },
  {
    id: 8,
    name: "Matte Lipstick",
    price: 24,
    image: "/placeholder.svg",
    category: "Makeup",
    description: "Long-wearing matte lipstick in rose"
  },
  {
    id: 9,
    name: "Eyeshadow Palette",
    price: 65,
    image: "/placeholder.svg",
    category: "Makeup",
    description: "12-shade palette in warm pink tones"
  },
  // Fragrance
  {
    id: 10,
    name: "Vanilla Mist",
    price: 55,
    image: "/placeholder.svg",
    category: "Fragrance",
    description: "Light body mist with vanilla and amber"
  },
  {
    id: 11,
    name: "Rose Water Spray",
    price: 32,
    image: "/placeholder.svg",
    category: "Fragrance",
    description: "Refreshing rose water face mist"
  },
  {
    id: 12,
    name: "Luxury Perfume Set",
    price: 180,
    image: "/placeholder.svg",
    category: "Fragrance",
    description: "Travel-size collection of signature scents"
  }
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const categories = ["All", "Skincare", "Makeup", "Fragrance"];

  const getFilteredProducts = (category: string) => {
    if (category === "All") return allProducts;
    return allProducts.filter(product => product.category === category);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of beauty products designed to enhance your natural beauty.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-pink-50">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProducts(category).map((product) => (
                  <Card
                    key={product.id}
                    className="group cursor-pointer border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <CardContent className="p-4">
                      <div className="aspect-square bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs text-pink-600 font-medium uppercase tracking-wide">
                          {product.category}
                        </span>
                        <h3 className="font-semibold text-gray-800 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-lg font-bold text-gray-800">
                            ${product.price}
                          </span>
                          <Button
                            size="sm"
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

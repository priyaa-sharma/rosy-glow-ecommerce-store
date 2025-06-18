
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface HeroProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

export const Hero = ({ cartItemsCount, onCartOpen }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-rose-100 to-pink-200">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">✨ Beautique</h1>
          <Button
            variant="outline"
            onClick={onCartOpen}
            className="relative border-pink-300 text-pink-700 hover:bg-pink-50"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Natural Glow
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium beauty products crafted with love and nature's finest ingredients. 
            Elevate your skincare routine with our curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pink-300 text-6xl opacity-20">✨</div>
      <div className="absolute bottom-10 right-10 text-rose-300 text-4xl opacity-20">💖</div>
      <div className="absolute top-1/2 right-20 text-pink-200 text-8xl opacity-10">🌸</div>
    </div>
  );
};

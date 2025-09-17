import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Listing {
  id: number;
  image: string;
  price: string;
  title: string;
  description: string;
  location: string;
  date: string;
  isFeatured: boolean;
}

interface PropertyGridProps {
  listings: Listing[];
  favorites?: Set<number>;
  onToggleFavorite?: (id: number) => void;
  onRemoveFavorite?: (id: number) => void;
}

const PropertyGrid = ({
  listings,
  favorites: externalFavorites,
  onToggleFavorite,
  onRemoveFavorite,
}: PropertyGridProps) => {
  const [internalFavorites, setInternalFavorites] = useState<Set<number>>(() => {
    // Load favorites from localStorage
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        const favoritesArray = JSON.parse(stored);
        return new Set(favoritesArray.map((p: any) => p.id));
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error);
        return new Set();
      }
    }
    return new Set();
  });
  const navigate = useNavigate();

  const favorites = externalFavorites ?? internalFavorites;
  const toggleFavorite = (id: number) => {
    if (onToggleFavorite) {
      onToggleFavorite(id);
    } else {
      const newFavorites = new Set(internalFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      setInternalFavorites(newFavorites);

      // Update localStorage
      const stored = localStorage.getItem("favorites");
      let favoritesArray: any[] = [];
      if (stored) {
        try {
          favoritesArray = JSON.parse(stored);
        } catch (error) {
          console.error("Error parsing favorites from localStorage:", error);
        }
      }

      if (newFavorites.has(id)) {
        // Add to favorites
        const property = listings.find(p => p.id === id);
        if (property && !favoritesArray.some(p => p.id === id)) {
          favoritesArray.push(property);
        }
      } else {
        // Remove from favorites
        favoritesArray = favoritesArray.filter(p => p.id !== id);
      }

      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
  };

  const handlePropertyClick = (id: number) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {listings.map((listing, index) => (
        <div
          key={listing.id}
          className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover-scale animate-scale-in cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => handlePropertyClick(listing.id)}
        >
          <div className="relative">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onRemoveFavorite && favorites.has(listing.id)) {
                  onRemoveFavorite(listing.id);
                } else {
                  toggleFavorite(listing.id);
                }
              }}
              className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  favorites.has(listing.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600"
                }`}
              />
            </button>
            {listing.isFeatured && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-4">
            <div className="text-xl font-bold text-foreground mb-1">
              {listing.price}
            </div>
            
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
              {listing.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
              {listing.description}
            </p>
            
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span className="uppercase font-medium truncate mr-2">
                {listing.location}
              </span>
              <span className="whitespace-nowrap">
                {listing.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;

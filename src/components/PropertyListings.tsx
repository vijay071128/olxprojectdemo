import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useState } from "react";

// Import property images
import houseImage from "@/assets/house-1.jpg";
import apartmentImage from "@/assets/apartment-1.jpg";
import villaImage from "@/assets/villa-1.jpg";
import landImage from "@/assets/land-1.jpg";

const properties = [
  {
    id: 1,
    title: "Modern Family House",
    price: "$450,000",
    type: "House",
    location: "Beverly Hills, CA",
    image: houseImage,
    beds: 4,
    baths: 3,
    area: "2,500 sq ft",
    featured: true,
    description: "Beautiful modern house with spacious rooms and garden"
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment",
    price: "$320,000",
    type: "Apartment",
    location: "Manhattan, NY",
    image: apartmentImage,
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    featured: false,
    description: "Luxury apartment in the heart of the city"
  },
  {
    id: 3,
    title: "Premium Villa with Pool",
    price: "$1,200,000",
    type: "Villa",
    location: "Miami Beach, FL",
    image: villaImage,
    beds: 6,
    baths: 4,
    area: "4,500 sq ft",
    featured: true,
    description: "Stunning villa with swimming pool and ocean view"
  },
  {
    id: 4,
    title: "Development Land Plot",
    price: "$180,000",
    type: "Land",
    location: "Austin, TX",
    image: landImage,
    beds: null,
    baths: null,
    area: "5,000 sq ft",
    featured: false,
    description: "Prime location for residential development"
  },
  {
    id: 5,
    title: "Cozy Suburban House",
    price: "$280,000",
    type: "House",
    location: "Phoenix, AZ",
    image: houseImage,
    beds: 3,
    baths: 2,
    area: "1,800 sq ft",
    featured: false,
    description: "Perfect starter home in quiet neighborhood"
  },
  {
    id: 6,
    title: "Penthouse Apartment",
    price: "$850,000",
    type: "Apartment",
    location: "Chicago, IL",
    image: apartmentImage,
    beds: 3,
    baths: 3,
    area: "2,200 sq ft",
    featured: true,
    description: "Luxury penthouse with city skyline views"
  }
];

const PropertyListings = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="property-card bg-card rounded-2xl overflow-hidden shadow-property animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary">
                    {property.type}
                  </Badge>
                </div>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                </Button>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {property.description}
                </p>

                {/* Property Features */}
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  {property.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 hero-button">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="px-6">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
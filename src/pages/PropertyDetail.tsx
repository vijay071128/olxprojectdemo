import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Home, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProperties } from "@/data/properties";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  
  const property = allProperties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property not found</h1>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Property Images */}
            <div className="lg:col-span-2">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                {property.isFeatured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleFavorite}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Property Details */}
              <Card className="mt-6 p-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm uppercase font-medium">
                    {property.location}
                  </span>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {property.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Type</p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {property.category}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Listed</p>
                      <p className="text-sm text-muted-foreground">
                        {property.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Property ID</p>
                      <p className="text-sm text-muted-foreground">
                        #{property.id.toString().padStart(4, '0')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This {property.category} offers excellent value and is perfect for those seeking 
                    a quality property in {property.location}. The property features modern amenities 
                    and is well-maintained. Located in a prime area with easy access to transportation, 
                    shopping, and entertainment facilities.
                  </p>
                </div>
              </Card>
            </div>

            {/* Price and Contact */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <div className="text-3xl font-bold text-foreground mb-1">
                  {property.price}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {property.type === 'luxury' ? 'Luxury Property' : 
                   property.type === 'commercial' ? 'Commercial Property' :
                   property.type === 'plot' ? 'Land Plot' :
                   property.type === 'industrial' ? 'Industrial Land' :
                   property.type === 'agricultural' ? 'Agricultural Land' :
                   'Residential Property'}
                </p>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Schedule Visit
                  </Button>
                  <Button variant="secondary" className="w-full" size="lg">
                    Request Info
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      A
                    </div>
                    <div>
                      <p className="font-medium">Property Agent</p>
                      <p className="text-sm text-muted-foreground">Real Estate Expert</p>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <span className="font-medium">4 items listed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
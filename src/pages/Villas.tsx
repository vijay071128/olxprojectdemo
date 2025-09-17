import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";

const Villas = () => {
  const villaListings = [
    {
      id: 9,
      image: "/src/assets/villa-1.jpg",
      price: "₹ 85,00,000",
      title: "4 BHK Luxury Villa",
      description: "Premium villa with swimming pool",
      location: "JUBILEE HILLS, HYDERABAD",
      date: "2 DAYS AGO",
      isFeatured: true
    },
    {
      id: 10,
      image: "/src/assets/villa-2.jpg",
      price: "₹ 65,00,000",
      title: "3 BHK Garden Villa",
      description: "Beautiful villa with landscaped garden",
      location: "WHITEFIELD, BANGALORE",
      date: "1 DAY AGO",
      isFeatured: true
    },
    {
      id: 11,
      image: "/src/assets/villa-1.jpg",
      price: "₹ 1,20,00,000",
      title: "5 BHK Premium Villa",
      description: "Ultra-luxury villa with all amenities",
      location: "BANDRA, MUMBAI",
      date: "4 DAYS AGO",
      isFeatured: true
    },
    {
      id: 20,
      image: "/src/assets/villa-2.jpg",
      price: "₹ 95,00,000",
      title: "4 BHK Modern Villa",
      description: "Contemporary design with smart features",
      location: "DLF PHASE 3, GURGAON",
      date: "3 DAYS AGO",
      isFeatured: false
    },
    {
      id: 21,
      image: "/src/assets/villa-2.jpg",
      price: "₹ 75,00,000",
      title: "3 BHK Pool Villa",
      description: "Villa with private swimming pool",
      location: "ECR, CHENNAI",
      date: "5 DAYS AGO",
      isFeatured: false
    },
    {
      id: 22,
      image: "/src/assets/villa-1.jpg",
      price: "₹ 2,00,00,000",
      title: "6 BHK Luxury Villa",
      description: "Grand villa with multiple amenities",
      location: "GOLF COURSE ROAD, GURGAON",
      date: "1 WEEK AGO",
      isFeatured: true
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = villaListings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Luxury Villas for Sale
            </h1>
            <p className="text-muted-foreground">
              Explore premium villas with world-class amenities
            </p>
            <input
              type="text"
              placeholder="Search villas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded"
            />
          </div>
          <PropertyGrid listings={filteredListings} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Villas;

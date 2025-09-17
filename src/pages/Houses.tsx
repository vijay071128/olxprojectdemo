import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";

const Houses = () => {
  const houseListings = [
    {
      id: 1,
      image: "/src/assets/house-3.jpg",
      price: "₹ 25,00,000",
      title: "3 BHK Independent House",
      description: "Spacious family home with garden",
      location: "SECTOR 21, GURGAON",
      date: "2 DAYS AGO",
      isFeatured: true
    },
    {
      id: 2,
      image: "/src/assets/house-5.jpg",
      price: "₹ 18,50,000",
      title: "2 BHK Row House",
      description: "Modern design with parking",
      location: "DWARKA, NEW DELHI",
      date: "4 DAYS AGO",
      isFeatured: false
    },
    {
      id: 3,
      image: "/src/assets/house-6.jpg",
      price: "₹ 35,00,000",
      title: "4 BHK Duplex House",
      description: "Luxury duplex with terrace",
      location: "BANJARA HILLS, HYDERABAD",
      date: "1 WEEK AGO",
      isFeatured: true
    },
    {
      id: 4,
      image: "/src/assets/house-5.jpg",
      price: "₹ 22,00,000",
      title: "3 BHK Villa Style",
      description: "Villa style independent house",
      location: "KORAMANGALA, BANGALORE",
      date: "3 DAYS AGO",
      isFeatured: false
    },
    {
      id: 16,
      image: "/src/assets/house-4.jpg",
      price: "₹ 28,00,000",
      title: "2 BHK Cottage Style",
      description: "Beautiful cottage with garden",
      location: "JUBILEE HILLS, HYDERABAD",
      date: "5 DAYS AGO",
      isFeatured: false
    },
    {
      id: 17,
      image: "/src/assets/house-2.jpg",
      price: "₹ 45,00,000",
      title: "5 BHK Luxury House",
      description: "Premium luxury independent house",
      location: "DEFENSE COLONY, NEW DELHI",
      date: "1 DAY AGO",
      isFeatured: true
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = houseListings.filter((listing) =>
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
              Houses for Sale
            </h1>
            <p className="text-muted-foreground">
              Find your dream home from our collection of houses
            </p>
            <input
              type="text"
              placeholder="Search houses..."
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

export default Houses;

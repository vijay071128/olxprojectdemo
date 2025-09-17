import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";

const Apartments = () => {
  const apartmentListings = [
    {
      id: 5,
      image: "/src/assets/apartment-1.jpg",
      price: "₹ 15,00,000",
      title: "2 BHK Apartment",
      description: "Modern apartment with amenities",
      location: "INDIRANAGAR, BANGALORE",
      date: "1 DAY AGO",
      isFeatured: true
    },
    {
      id: 6,
      image: "/src/assets/apartment-2.jpg",
      price: "₹ 12,50,000",
      title: "1 BHK Studio Apartment",
      description: "Compact and well-designed studio",
      location: "POWAI, MUMBAI",
      date: "3 DAYS AGO",
      isFeatured: false
    },
    {
      id: 7,
      image: "/src/assets/apartment-1.jpg",
      price: "₹ 22,00,000",
      title: "3 BHK Premium Apartment",
      description: "Luxury apartment with city view",
      location: "CYBER CITY, GURGAON",
      date: "2 DAYS AGO",
      isFeatured: true
    },
    {
      id: 8,
      image: "/src/assets/apartment-2.jpg",
      price: "₹ 18,00,000",
      title: "2 BHK Furnished Apartment",
      description: "Fully furnished ready to move",
      location: "HITECH CITY, HYDERABAD",
      date: "4 DAYS AGO",
      isFeatured: false
    },
    {
      id: 18,
      image: "/src/assets/apartment-1.jpg",
      price: "₹ 35,00,000",
      title: "4 BHK Penthouse",
      description: "Luxury penthouse with terrace",
      location: "WORLI, MUMBAI",
      date: "1 WEEK AGO",
      isFeatured: true
    },
    {
      id: 19,
      image: "/src/assets/apartment-2.jpg",
      price: "₹ 8,50,000",
      title: "1 BHK Compact Apartment",
      description: "Affordable compact living space",
      location: "WHITEFIELD, BANGALORE",
      date: "6 DAYS AGO",
      isFeatured: false
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = apartmentListings.filter((listing) =>
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
              Apartments for Sale
            </h1>
            <p className="text-muted-foreground">
              Discover modern apartments in prime locations
            </p>
            <input
              type="text"
              placeholder="Search apartments..."
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

export default Apartments;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";

const Lands = () => {
  const landListings = [
    {
      id: 12,
      image: "/src/assets/land-1.jpg",
      price: "₹ 45,00,000",
      title: "5000 sq ft Residential Plot",
      description: "Prime residential plot for construction",
      location: "SECTOR 45, NOIDA",
      date: "1 DAY AGO",
      isFeatured: true
    },
    {
      id: 13,
      image: "/src/assets/land-2.jpg",
      price: "₹ 25,00,000",
      title: "3000 sq ft Plot",
      description: "Ready to construct residential plot",
      location: "ELECTRONIC CITY, BANGALORE",
      date: "3 DAYS AGO",
      isFeatured: false
    },
    {
      id: 14,
      image: "/src/assets/land-1.jpg",
      price: "₹ 80,00,000",
      title: "8000 sq ft Commercial Land",
      description: "Prime commercial plot near highway",
      location: "NH8, GURGAON",
      date: "2 DAYS AGO",
      isFeatured: true
    },
    {
      id: 15,
      image: "/src/assets/land-2.jpg",
      price: "₹ 1,20,00,000",
      title: "1 Acre Farm Land",
      description: "Agricultural land with water facility",
      location: "OUTSKIRTS, PUNE",
      date: "1 WEEK AGO",
      isFeatured: true
    },
    {
      id: 23,
      image: "/src/assets/land-1.jpg",
      price: "₹ 35,00,000",
      title: "4000 sq ft Corner Plot",
      description: "Corner plot with good connectivity",
      location: "KOMPALLY, HYDERABAD",
      date: "4 DAYS AGO",
      isFeatured: false
    },
    {
      id: 24,
      image: "/src/assets/land-2.jpg",
      price: "₹ 60,00,000",
      title: "6000 sq ft Industrial Plot",
      description: "Industrial plot in developed area",
      location: "OKHLA, NEW DELHI",
      date: "5 DAYS AGO",
      isFeatured: false
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = landListings.filter((listing) =>
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
              Land & Plots for Sale
            </h1>
            <p className="text-muted-foreground">
              Find prime plots and land for your dream project
            </p>
            <input
              type="text"
              placeholder="Search lands..."
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

export default Lands;

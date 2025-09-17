import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Houses from "./pages/Houses";
import Apartments from "./pages/Apartments";
import Villas from "./pages/Villas";
import Lands from "./pages/Lands";
import Search from "./pages/Search";
import PropertyDetail from "./pages/PropertyDetail";
import HeartInn from "./pages/HeartInn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/lands" element={<Lands />} />
          <Route path="/search" element={<Search />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/heartinn" element={<HeartInn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

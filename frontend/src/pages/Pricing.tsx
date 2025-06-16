
import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="max-w-5xl mx-auto px-8 py-10">
      <PricingTable />
    </main>
    <footer className="py-8 text-center text-sm text-muted-foreground mt-12">
      &copy; {new Date().getFullYear()} LandingPagePro &mdash; All rights reserved.
    </footer>
  </div>
);

export default Pricing;

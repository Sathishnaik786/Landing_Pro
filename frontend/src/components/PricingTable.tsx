
import { Check } from "lucide-react";

const tiers = [
  {
    name: "One-Time License",
    price: "$199",
    desc: "Lifetime use of generator, full self-serve, unlimited pages.",
    features: [
      "No recurring fees",
      "Full template library",
      "Lifetime updates",
      "Priority email support",
    ],
    highlight: false,
  },
  {
    name: "Pro Subscription",
    price: "$20/mo",
    desc: "For businesses who want unlimited pages and premium support.",
    features: [
      "Everything in License",
      "Custom domain",
      "Team collaboration",
      "Integrations & analytics",
    ],
    highlight: true,
  },
  {
    name: "Custom Services",
    price: "From $500",
    desc: "Let our experts design, build, and launch your site.",
    features: [
      "Custom design & dev",
      "Priority onboarding",
      "Dedicated support",
    ],
    highlight: false,
  },
];

const PricingTable = () => (
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-xl bg-card p-8 shadow relative border ${
            tier.highlight ? "border-blue-500 scale-105 z-10" : "border-gray-200"
          } animate-fade-in`}
        >
          {tier.highlight && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full shadow text-xs font-bold">
              Best Value
            </span>
          )}
          <div className="text-xl font-semibold text-center mb-2">{tier.name}</div>
          <div className="text-4xl font-bold text-center mb-1">{tier.price}</div>
          <div className="text-muted-foreground text-center mb-4">{tier.desc}</div>
          <ul className="space-y-2 mb-6">
            {tier.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="text-emerald-500" size={18} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full rounded-lg py-3 font-medium text-lg transition ${
              tier.highlight
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-blue-900 hover:bg-blue-100"
            }`}
          >
            {tier.name === "Custom Services" ? "Contact Us" : "Start Free Trial"}
          </button>
        </div>
      ))}
    </div>
  </div>
);
export default PricingTable;

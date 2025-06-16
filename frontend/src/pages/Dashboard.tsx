
import Navbar from "../components/Navbar";
import TemplatePicker from "../components/TemplatePicker";
import { Plus, FileText } from "lucide-react";
import { useState } from "react";

const mockPages = [
  {
    id: "1",
    name: "Spring Sale",
    url: "https://demo-landing1.lovable.dev",
    template: "Bold Hero",
    status: "Published",
    created: "2024-06-07",
    updated: "2024-06-12",
  },
  {
    id: "2",
    name: "Consulting Lead Gen",
    url: "https://yourbrand.lovable.dev",
    template: "Minimalist",
    status: "Draft",
    created: "2024-05-20",
    updated: "2024-06-06",
  },
];

const Dashboard = () => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-5xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">My Landing Pages</h2>
          <button
            onClick={() => setShowPicker(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 font-medium shadow hover:scale-105 transition-all"
          >
            <Plus />
            New Page
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockPages.map((page) => (
            <div key={page.id} className="bg-card p-6 rounded-xl shadow group transition hover:scale-105 animate-fade-in">
              <div className="flex items-center mb-2 gap-3">
                <FileText className="text-blue-500" />
                <span className="font-semibold text-lg">{page.name}</span>
                {page.status === "Published" ? (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs">Published</span>
                ) : (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs">Draft</span>
                )}
              </div>
              <div className="text-muted-foreground text-sm mb-2">
                Template: <span className="font-medium">{page.template}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={page.url}
                  rel="noopener"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  {page.url}
                </a>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Created: {page.created} | Updated: {page.updated}
              </div>
            </div>
          ))}
        </div>

        <TemplatePicker open={showPicker} onClose={() => setShowPicker(false)} />
      </main>
    </div>
  );
};
export default Dashboard;

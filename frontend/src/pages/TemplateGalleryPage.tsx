import TemplateGallery from "../components/TemplateGallery";
import Navbar from "../components/Navbar";

const TemplateGalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto py-12 px-8">
        <TemplateGallery />
      </main>
    </div>
  );
};

export default TemplateGalleryPage; 
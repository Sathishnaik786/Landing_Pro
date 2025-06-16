import { LayoutGrid, LayoutList, GalleryHorizontal, GalleryVertical, ShoppingBag, Briefcase, Rocket, Palette, Building2, Megaphone, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

const templates = [
  {
    name: "Modern SaaS",
    desc: "Perfect for SaaS startups with feature highlights and pricing.",
    icon: Rocket,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-4/5 h-3 bg-white/90 rounded-full mb-3" />
        <div className="w-3/5 h-2 bg-white/70 rounded-full mb-4" />
        <div className="flex gap-2 w-4/5">
          <div className="w-1/3 h-8 bg-white/80 rounded-lg" />
          <div className="w-1/3 h-8 bg-white/60 rounded-lg" />
          <div className="w-1/3 h-8 bg-white/40 rounded-lg" />
        </div>
        <div className="absolute bottom-3 right-3 bg-white/30 w-16 h-16 rounded-full blur-xl" />
      </div>
    ),
  },
  {
    name: "E-commerce Showcase",
    desc: "Product-focused layout with grid gallery and quick buy options.",
    icon: ShoppingBag,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-rose-100 to-orange-100 p-4">
        <div className="w-full h-3 bg-rose-400/80 rounded-full mb-3" />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-white/90 rounded-lg shadow-sm flex flex-col items-center p-2">
              <div className="w-full h-2/3 bg-rose-200 rounded mb-1" />
              <div className="w-3/4 h-2 bg-rose-300/60 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Creative Portfolio",
    desc: "Showcase your work with a modern masonry grid layout.",
    icon: Palette,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-neutral-900 p-3">
        <div className="w-3/5 h-2 bg-neutral-700 rounded-full mb-3" />
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <div className="h-16 bg-neutral-800 rounded" />
            <div className="h-24 bg-neutral-800 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-neutral-800 rounded" />
            <div className="h-16 bg-neutral-800 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Corporate Business",
    desc: "Professional layout for corporate websites and services.",
    icon: Building2,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-r from-blue-50 to-slate-50 p-4">
        <div className="w-4/5 h-3 bg-blue-600/90 rounded-full mb-3" />
        <div className="flex gap-3">
          <div className="w-1/2 space-y-2">
            <div className="h-4 bg-blue-200/80 rounded" />
            <div className="h-4 bg-blue-200/60 rounded" />
            <div className="h-4 bg-blue-200/40 rounded" />
          </div>
          <div className="w-1/2 h-24 bg-blue-100/80 rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    name: "Marketing Agency",
    desc: "Bold design for marketing agencies and creative services.",
    icon: Megaphone,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-4">
        <div className="w-3/5 h-3 bg-white/90 rounded-full mb-3" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-2">
            <div className="h-3 bg-white/80 rounded-full" />
            <div className="h-3 bg-white/60 rounded-full" />
          </div>
          <div className="h-16 bg-white/40 rounded-lg" />
        </div>
        <div className="mt-3 flex gap-2">
          <div className="w-1/3 h-8 bg-white/30 rounded" />
          <div className="w-1/3 h-8 bg-white/20 rounded" />
        </div>
      </div>
    ),
  },
  {
    name: "Startup Landing",
    desc: "Clean, modern design for tech startups and apps.",
    icon: Briefcase,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 p-4">
        <div className="w-4/5 h-3 bg-white/90 rounded-full mb-3" />
        <div className="flex items-center gap-4">
          <div className="w-1/2 space-y-2">
            <div className="h-4 bg-white/80 rounded-full" />
            <div className="h-4 bg-white/60 rounded-full" />
            <div className="h-8 bg-white/40 rounded-lg w-2/3" />
          </div>
          <div className="w-1/2 h-32 bg-white/20 rounded-lg backdrop-blur-sm" />
        </div>
      </div>
    ),
  }
];

interface TemplateModalProps {
  template: typeof templates[0];
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal = ({ template, isOpen, onClose }: TemplateModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl flex items-center gap-2">
          <template.icon className="text-blue-500" size={24} />
          {template.name}
        </DialogTitle>
        <DialogDescription className="text-base">{template.desc}</DialogDescription>
      </DialogHeader>
      
      <div className="mt-4">
        <div className="rounded-lg overflow-hidden border border-border">
          {template.preview}
        </div>
        
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-lg">Template Features</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Responsive design for all devices</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Optimized for conversion</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Easy to customize</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Built-in lead capture forms</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Use Template <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null);

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center mb-2">Template Gallery</h2>
      <p className="text-center text-muted-foreground mb-10">
        Explore a selection of professionally-designed landing page templates.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((tpl, i) => (
          <div
            key={tpl.name}
            onClick={() => setSelectedTemplate(tpl)}
            className="group bg-white rounded-xl border border-border shadow-lg hover:shadow-2xl hover:scale-105 transition p-4 flex flex-col cursor-pointer"
          >
            <div className="mb-3 rounded-lg overflow-hidden">{tpl.preview}</div>
            <div className="flex items-center gap-2 mb-1">
              <tpl.icon className="text-blue-500" size={20} />
              <span className="font-semibold text-lg">{tpl.name}</span>
              {i === 0 && (
                <span className="ml-2 text-xs bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">
                  Popular
                </span>
              )}
            </div>
            <div className="text-muted-foreground text-sm">{tpl.desc}</div>
            <div className="mt-4 text-sm text-blue-600 group-hover:underline">
              View details →
            </div>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </section>
  );
};

export default TemplateGallery;

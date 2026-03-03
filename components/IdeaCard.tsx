import { Lightbulb, Image as ImageIcon } from 'lucide-react';

export default function IdeaCard({ idea }: { idea: any }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
      <div className="flex items-center gap-2 text-blue-400 mb-4">
        <Lightbulb size={20} />
        <span className="text-xs font-bold uppercase tracking-wider">Concepto Viral</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
      <p className="text-slate-400 text-sm mb-6">{idea.hook}</p>
      
      <button className="w-full bg-slate-800 group-hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition">
        <ImageIcon size={18} /> Generar Miniatura
      </button>
    </div>
  );
}

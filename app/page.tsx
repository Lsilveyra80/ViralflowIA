"use client";
import { useState } from 'react';
import IdeaCard from '@/components/IdeaCard';
import { Sparkles, Search } from 'lucide-react';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState([]);

  const mockAnalyze = () => {
    // Esto simula lo que hará la IA más adelante
    setIdeas([
      { title: "Transformando Madera Reciclada con IA", hook: "No creerás lo que esta IA diseñó...", prompt: "Un taller moderno con madera y hologramas." },
      { title: "Dropshipping de Muebles Sustentables", hook: "El mercado que nadie está explotando hoy.", prompt: "Muebles minimalistas hechos de vidrio reciclado." }
    ]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Viralyt Clone
          </h1>
          <p className="text-slate-400">Encuentra tu próxima idea viral en segundos.</p>
        </header>

        <div className="flex gap-2 p-2 bg-slate-900 rounded-lg border border-slate-800">
          <input 
            className="flex-1 bg-transparent p-2 outline-none"
            placeholder="Introduce un nicho (ej: Carpintería con IA)..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button 
            onClick={mockAnalyze}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md flex items-center gap-2 transition"
          >
            <Search size={18} /> Analizar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ideas.map((idea, i) => (
            <IdeaCard key={i} idea={idea} />
          ))}
        </div>
      </div>
    </main>
  );
}

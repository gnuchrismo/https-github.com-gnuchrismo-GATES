
import React, { useState } from 'react';
import { TEAM, PROJECTS, BLOG_POSTS, EVENTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  // URL del logo proporcionado por el usuario
  const logoUrl = "logo_white-removebg-preview.png";

  const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="mb-12">
      {subtitle && <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{subtitle}</span>}
      <h2 className="serif-font mt-2 text-4xl font-bold text-primary">{children}</h2>
      <div className="mt-4 h-1 w-20 bg-accent rounded-full"></div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col selection:bg-accent/20 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Luis Zúñiga Logo" className="h-14 w-auto object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-primary leading-tight">Luis Zúñiga <span className="text-accent">Bolivia</span></h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Investigación & Desarrollo</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            {['Inicio', 'Sobre Nosotros', 'Proyectos', 'Publicaciones', 'Eventos', 'Blog', 'Contactos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(/\s/g, ''))}
                className={`text-sm font-bold transition-all hover:text-accent ${activeTab === tab.toLowerCase().replace(/\s/g, '') ? 'text-accent' : 'text-primary'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <button className="rounded-full bg-primary px-6 py-2 text-xs font-bold text-white shadow-lg shadow-primary/20 hover:bg-accent transition-all">
            Colaborar
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* INICIO SECTION */}
        {activeTab === 'inicio' && (
          <>
            <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                  className="h-full w-full object-cover brightness-[0.3]" 
                  alt="Laboratorio"
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold mb-6">ORGULLO BOLIVIANO</span>
                  <h1 className="serif-font text-5xl md:text-7xl font-bold text-white leading-tight">
                    Somos un equipo comprometido con la <span className="gold-text">investigación científica</span>.
                  </h1>
                  <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Impulsamos el desarrollo social de Bolivia a través del rigor académico y la innovación tecnológica.
                  </p>
                  <div className="mt-12 flex gap-4">
                    <button onClick={() => setActiveTab('proyectos')} className="bg-accent px-8 py-4 rounded-lg font-bold text-white shadow-xl hover:translate-y-[-2px] transition-all">
                      Nuestros Proyectos
                    </button>
                    <div className="flex items-center gap-4 px-6 text-white italic border-l-2 border-accent">
                      "Investigar es sembrar futuro."
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Equipo Z-Labs" />
                </div>
                <div>
                  {/* Fix line 87: Property 'children' is missing */}
                  <SectionTitle subtitle="Bienvenida">Impacto Social</SectionTitle>
                  <p className="text-lg text-slate-600 mb-8">
                    Desde el corazón de Bolivia, Z-Labs nace como una respuesta a la necesidad de soluciones locales con estándares globales. Creemos que la ciencia es el motor de transformación más potente para nuestra sociedad.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-slate-50">
                      <h4 className="text-3xl font-bold text-primary">15+</h4>
                      <p className="text-sm text-slate-500 font-bold uppercase mt-1">Investigaciones</p>
                    </div>
                    <div className="p-6 rounded-xl bg-slate-50">
                      <h4 className="text-3xl font-bold text-primary">08</h4>
                      <p className="text-sm text-slate-500 font-bold uppercase mt-1">Aliados Globales</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* SOBRE NOSOTROS SECTION */}
        {activeTab === 'sobrenosotros' && (
          <section className="py-20 bg-bg-lab">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 111: Property 'children' is missing */}
              <SectionTitle subtitle="Conócenos">Sobre Nosotros</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="material-symbols-outlined text-4xl text-accent mb-4">history_edu</span>
                  <h3 className="text-xl font-bold mb-4">Historia</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Iniciamos en 2018 como un grupo de investigadores voluntarios en La Paz, hoy somos una red nacional dedicada al desarrollo tecnológico.</p>
                </div>
                <div className="p-8 bg-primary rounded-2xl shadow-xl text-white">
                  <span className="material-symbols-outlined text-4xl text-accent mb-4">rocket_launch</span>
                  <h3 className="text-xl font-bold mb-4">Misión</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Transformar la realidad boliviana mediante investigación científica aplicada de alto impacto social.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="material-symbols-outlined text-4xl text-accent mb-4">visibility</span>
                  <h3 className="text-xl font-bold mb-4">Visión</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Ser el referente líder en innovación y ciencia en la región andina para el año 2030.</p>
                </div>
              </div>

              {/* Fix line 130: Property 'children' is missing */}
              <SectionTitle subtitle="El Talento">Investigadores</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM.map(member => (
                  <div key={member.id} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                        <h4 className="text-white font-bold text-lg">{member.name}</h4>
                        <p className="text-accent text-sm">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROYECTOS SECTION */}
        {activeTab === 'proyectos' && (
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 153: Property 'children' is missing */}
              <SectionTitle subtitle="Cartera I+D">Proyectos y Propuestas</SectionTitle>
              <div className="grid gap-8">
                {PROJECTS.map(project => (
                  <div key={project.id} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold uppercase ${project.status === 'En curso' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {project.status}
                      </span>
                      <h3 className="text-2xl font-bold mt-3 mb-4 text-primary">{project.title}</h3>
                      <p className="text-slate-600 mb-6">{project.summary}</p>
                      {project.results && (
                        <div className="p-4 bg-white rounded-lg border-l-4 border-accent italic text-sm text-slate-700">
                          <strong>Resultado destacado:</strong> {project.results}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold rounded-lg hover:bg-accent transition-all">
                        <span className="material-symbols-outlined text-sm">picture_as_pdf</span> Documento Completo
                      </button>
                      <button className="px-6 py-3 border border-slate-200 text-primary text-xs font-bold rounded-lg hover:bg-slate-100 transition-all">
                        Más Información
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PUBLICACIONES SECTION */}
        {activeTab === 'publicaciones' && (
          <section className="py-20">
             <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 188: Property 'children' is missing */}
              <SectionTitle subtitle="Producción Intelectual">Publicaciones</SectionTitle>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent">article</span> Artículos Científicos
                  </h3>
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 border-b border-slate-100 group cursor-pointer hover:bg-slate-50 transition-all">
                      <p className="text-xs text-slate-400 font-bold mb-1">Journal of Bolivian Science • 2023</p>
                      <h4 className="font-bold text-primary group-hover:text-accent transition-colors">Implementación de Algoritmos Genéticos en la Optimización de Transporte Urbano.</h4>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent">school</span> Tesis y Colaboraciones
                  </h3>
                   {[1, 2].map(i => (
                    <div key={i} className="p-6 bg-slate-900 text-white rounded-xl">
                      <h4 className="font-bold text-accent mb-2">Tesis de Grado - UMSA</h4>
                      <p className="text-sm text-slate-300 italic">"Estudio fenomenológico de las radiaciones solares en ciudades de altura."</p>
                      <button className="mt-4 text-xs font-bold underline underline-offset-4 decoration-accent">Ver Repositorio</button>
                    </div>
                  ))}
                </div>
              </div>
             </div>
          </section>
        )}

        {/* EVENTOS SECTION */}
        {activeTab === 'eventos' && (
          <section className="py-20 bg-slate-50">
             <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 222: Property 'children' is missing */}
              <SectionTitle subtitle="Comunidad">Eventos y Convocatorias</SectionTitle>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {EVENTS.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-2xl shadow-sm flex gap-6">
                      <div className="bg-primary text-white h-16 w-16 rounded-xl flex flex-col items-center justify-center shrink-0">
                        <span className="text-xl font-bold">20</span>
                        <span className="text-[10px] uppercase">Jun</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">{event.type}</span>
                        <h4 className="text-xl font-bold text-primary my-1">{event.title}</h4>
                        <p className="text-sm text-slate-500">{event.description}</p>
                        <button className="mt-4 text-xs font-bold text-primary hover:text-accent transition-all">Inscribirse →</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold mb-6">Calendario Académico</h3>
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold mb-4">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => <div key={d} className="text-slate-400">{d}</div>)}
                    {Array.from({length: 30}).map((_, i) => (
                      <div key={i} className={`p-2 rounded-lg ${i === 19 ? 'bg-accent text-white' : 'hover:bg-slate-100 cursor-pointer'}`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-accent/10 rounded-xl border-t-2 border-accent">
                    <h4 className="text-sm font-bold text-primary">Convocatoria Abierta</h4>
                    <p className="text-xs text-slate-600 mt-2">Buscamos investigadores para el proyecto de IA Social.</p>
                    <button className="mt-4 w-full py-2 bg-primary text-white rounded-lg text-[10px] font-bold">Postular Ahora</button>
                  </div>
                </div>
              </div>
             </div>
          </section>
        )}

        {/* BLOG SECTION */}
        {activeTab === 'blog' && (
          <section className="py-20">
             <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 265: Property 'children' is missing */}
              <SectionTitle subtitle="Bitácora">Blog</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-md">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs text-accent font-bold">{post.date}</span>
                    <h3 className="text-xl font-bold text-primary mt-2 mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                  </article>
                ))}
              </div>
             </div>
          </section>
        )}

        {/* CONTACTOS SECTION */}
        {activeTab === 'contactos' && (
          <section className="py-20 bg-bg-lab">
             <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Fix line 286: Property 'children' is missing */}
              <SectionTitle subtitle="Diálogo">Contactos</SectionTitle>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                   <h3 className="text-2xl font-bold mb-8 text-primary">Iniciemos una conversación</h3>
                   <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Correo Institucional</p>
                        <p className="font-bold text-primary">contacto@zlabs.bo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ubicación</p>
                        <p className="font-bold text-primary">Zona Sur, Calle 15 • La Paz, Bolivia</p>
                      </div>
                    </div>
                    <div className="pt-8 flex gap-4">
                      <button className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="h-5 w-5" alt="FB" />
                      </button>
                      <button className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="h-5 w-5" alt="LN" />
                      </button>
                    </div>
                   </div>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400">Nombre</label>
                        <input type="text" className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-accent" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400">Email</label>
                        <input type="email" className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-accent" placeholder="email@tuyo.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-400">Mensaje</label>
                      <textarea rows={4} className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-accent" placeholder="¿En qué podemos colaborar?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-accent transition-all">
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
             </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img src={logoUrl} alt="Logo Z" className="h-12 w-auto brightness-200" />
               <h3 className="text-xl font-bold tracking-tight">Z-Labs Bolivia</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Institución privada de investigación dedicada a cerrar la brecha tecnológica en comunidades andinas y amazónicas.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><button onClick={() => setActiveTab('proyectos')} className="hover:text-white">Proyectos vigentes</button></li>
              <li><button onClick={() => setActiveTab('eventos')} className="hover:text-white">Oportunidades</button></li>
              <li><button onClick={() => setActiveTab('blog')} className="hover:text-white">Blog de avances</button></li>
              <li><button className="hover:text-white">Privacidad</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-6">Ubicación</h4>
            <p className="text-sm text-slate-300">Edificio Innovation Hub, Piso 4<br/>Calle 15 Calacoto, La Paz, Bolivia</p>
            <div className="mt-6 flex items-center gap-2 text-accent text-sm font-bold">
               <span className="material-symbols-outlined">phone_iphone</span> +591 700 00000
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">© 2024 Z-Labs Research Bolivia • Investigar es sembrar futuro</p>
           <div className="flex gap-4">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span className="h-2 w-2 rounded-full bg-green-600"></span>
              <span className="h-2 w-2 rounded-full bg-red-600"></span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

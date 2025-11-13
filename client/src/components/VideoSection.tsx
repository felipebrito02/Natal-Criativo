export default function VideoSection() {
  return (
    <section id="conteudo-principal" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-foreground">
                Descubra a Magia do Feltro
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Este e-book exclusivo contém <strong className="text-foreground">300 moldes de artesanato natalino</strong> em feltro, cuidadosamente selecionados para tornar seu Natal inesquecível.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl md:text-2xl text-foreground">O que você vai receber:</h3>
              <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>300 moldes exclusivos em alta qualidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Download instantâneo em PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Padrões para iniciantes e experientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Instruções claras e fáceis de seguir</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Moldes prontos para imprimir</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="aspect-video rounded-xl shadow-2xl overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Apresentação do E-book"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-presentation"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

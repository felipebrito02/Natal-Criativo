

export default function VideoSection() {
  return (
    <section id="conteudo-principal" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Seção do vídeo e benefícios */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-foreground">
                Descubra a Magia do Feltro
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Este e-book exclusivo contém{" "}
                <strong className="text-foreground">
                  300 moldes de artesanato natalino
                </strong>{" "}
                em feltro, cuidadosamente selecionados para tornar seu Natal
                inesquecível.
              </p>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="aspect-video rounded-xl shadow-2xl overflow-hidden bg-muted">
              <video
                id="video-presentation"
                src="/videos/meu-video.mp4"
                controls
                playsInline
                data-testid="video-presentation"
                className="w-full h-full object-cover"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

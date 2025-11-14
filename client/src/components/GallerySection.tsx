const galleryItems = [
  { image: "/images/image4.jpeg", alt: "Papai Noel em feltro" },
  { image: "/images/image5.jpeg", alt: "Papai Noel em feltro" },
  { image: "/images/image6.jpeg", alt: "Papai Noel em feltro" },
  { image: "/images/image1.jpeg", alt: "Papai Noel em feltro" },
  { image: "/images/image2.jpeg", alt: "Papai Noel em feltro" },
  { image: "/images/image3.jpeg", alt: "Papai Noel em feltro" },
];

export default function GallerySection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Exemplos de Artesanato
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos lindos projetos que você poderá criar com nossos
            moldes exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-card hover-elevate transition-transform duration-300"
              data-testid={`gallery-item-${index}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

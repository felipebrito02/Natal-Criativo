import stockingImage from "@assets/generated_images/Felt_Christmas_stocking_ornament_ebca3c70.png";
import treeImage from "@assets/generated_images/Felt_Christmas_tree_ornaments_723823d8.png";
import santaImage from "@assets/generated_images/Felt_Santa_Claus_figure_f6af8a76.png";
import snowflakesImage from "@assets/generated_images/Felt_snowflakes_and_stars_3b6b6a73.png";
import nativityImage from "@assets/generated_images/Felt_nativity_scene_pieces_7739400a.png";
import wreathImage from "@assets/generated_images/Felt_Christmas_wreath_a974125a.png";
import reindeerImage from "@assets/generated_images/Felt_reindeer_ornaments_d6decf52.png";
import angelsImage from "@assets/generated_images/Felt_angels_and_bells_030bd56c.png";

const galleryItems = [
  { image: stockingImage, alt: "Botas e meias de Natal em feltro" },
  { image: treeImage, alt: "Árvores de Natal em feltro" },
  { image: santaImage, alt: "Papai Noel em feltro" },
  { image: snowflakesImage, alt: "Flocos de neve e estrelas em feltro" },
  { image: nativityImage, alt: "Presépio em feltro" },
  { image: wreathImage, alt: "Guirlandas de Natal em feltro" },
  { image: reindeerImage, alt: "Renas e animais em feltro" },
  { image: angelsImage, alt: "Anjos e sinos em feltro" },
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
            Veja alguns dos lindos projetos que você poderá criar com nossos moldes exclusivos
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

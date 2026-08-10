import ATOM_LOGO from "../../assets/atom.png";
import DJANGO_LOGO from "../../assets/django.jpg";
import LARAVEL_LOGO from "../../assets/laravel.png";
import FIGMA_LOGO from "../../assets/figma.png";

const STACK = [
  { name: "React Native", logo: ATOM_LOGO },
  { name: "Django", logo: DJANGO_LOGO },
  { name: "Laravel", logo: LARAVEL_LOGO },
  { name: "Figma", logo: FIGMA_LOGO },
];

export default function Technology() {
  return (
    <section className="py-20 bg-surface reveal">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <div className="text-2xl font-bold text-primary mb-10">
          Technology
        </div>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-outline items-center">
          {STACK.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-3 font-bold text-xl tracking-wider opacity-50 hover:opacity-100 hover:text-primary transition-all cursor-default"
            >
              <img src={tech.logo} alt={`${tech.name} logo`} className="w-6 h-6 object-contain rounded-sm" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

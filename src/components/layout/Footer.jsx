const LINKS = ["Privacy Policy", "Terms of Service", "Data Ethics", "Contact Us"];

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest dark:bg-primary border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed mb-4">
            AgroSense
          </div>
          <div className="font-body-md text-body-md text-primary dark:text-primary-fixed opacity-70">
            © 2024 AgroSense Intelligence. All rights reserved. Precision Geospatial Wisdom.
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-start pt-2">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-fresh-leaf transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { FaWhatsapp } from "react-icons/fa";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/6282340709041"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      data-testid="sticky-whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us!
      </span>
    </a>
  );
}

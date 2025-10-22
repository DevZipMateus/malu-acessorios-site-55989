import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5577999952030"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full shadow-lg transition-colors duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;

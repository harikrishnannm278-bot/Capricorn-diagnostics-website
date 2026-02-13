function WhatsAppFloat() {
  const phone = "918301959266"; // your WhatsApp number with country code
  const message = "Hello, I would like to enquire about your diagnostic products.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}

export default WhatsAppFloat;

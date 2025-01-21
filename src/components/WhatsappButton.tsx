import ReactPixel from "react-facebook-pixel";

export function WhatsappButton() {
  const phoneNumber = import.meta.env.VITE_WS_NUMBER || "";
  const message = "¡Hola! Estoy interesado en más información.";

  const handleClick = () => {
    const buttonClicked = sessionStorage.getItem(`ButtonWSClicked`);
    if (!buttonClicked) {
      ReactPixel.track('clickWS');
      sessionStorage.setItem("ButtonWSClicked", "true");
    };
  }
  
  return (
    <a
      onClick={handleClick}
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-3 right-4 p-3 bg-neutral-800 rounded-full shadow-xl hover:bg-green-600 focus:ring-4 focus:ring-green-300 flex items-center justify-center transition-transform transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10">
        <path className="fill-green-500" d="M12 2C6.486 2 2 6.486 2 12c0 2.113.584 4.082 1.608 5.784L2 22l4.352-1.572A9.953 9.953 0 0 0 12 22c5.515 0 10-4.486 10-10S17.515 2 12 2zm0 18c-1.603 0-3.103-.423-4.434-1.158l-.313-.162-2.5.905.878-2.564-.168-.293C4.421 15.071 4 13.573 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.636-6.39c-.249-.125-1.474-.728-1.702-.81-.229-.081-.397-.125-.565.125-.168.248-.648.81-.794.978-.146.165-.292.186-.54.061-.248-.124-1.047-.385-1.993-1.229-.737-.656-1.234-1.465-1.38-1.713-.146-.248-.016-.382.109-.507.11-.11.248-.292.372-.437.125-.146.166-.248.249-.413.084-.165.042-.311-.021-.435-.062-.124-.564-1.36-.772-1.861-.203-.487-.411-.42-.564-.428-.146-.006-.312-.008-.478-.008-.166 0-.435.062-.662.311-.228.25-.87.85-.87 2.075s.891 2.406 1.016 2.573c.124.165 1.754 2.675 4.254 3.747.595.257 1.059.411 1.421.525.596.19 1.14.164 1.57.1.479-.072 1.474-.602 1.682-1.183.207-.581.207-1.08.145-1.183-.062-.103-.229-.165-.478-.289z"></path>
    </svg>
    </a>
  );
}

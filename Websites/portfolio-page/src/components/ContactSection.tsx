function ContactSection() {
  return (
    <div className="w-full h-screen pt-14 pl-[8rem] flex flex-col justify-between items-center">
      <div className="text-center flex flex-col items-center w-5/12">
        <h2 className="inline-block text-5xl font-bold p-4 pb-4 border-b-4 border-custom-green">
          Contact
        </h2>
        <p className="mt-4 text-xl ">Feel free to Contact with me</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl w-5/12 text-center">
          Feel free to contact me – I'm always open for a chat! Send me an
          email, or find me on LinkedIn or Instagram if that's more convenient
          for you. If you have a question, want to collaborate, or have an
          interesting offer – don't hesitate to reach out!
        </p>
        <button className="pointer-events-auto my-14 w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-2">
          <a>Say Hello!</a>
        </button>
      </div>
      <p className="pb-8 text-sm">Designed & Built by Roma Stakhiv</p>
    </div>
  );
}

export default ContactSection;

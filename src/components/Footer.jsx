function Footer() {
  return (
    <footer className="bg-[#00A651] mt-12 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-between">
        <img
          src="/imgs/echo (3).svg"
          alt="Logo PetCare"
          className="h-28 w-auto"
        />
        <p className="text-sm text-white text-center sm:text-right">
          © 2024 PetCare Connect. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

export default function Atendimentos() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center bg-[#3582d5] mt-7 py-10 px-6 lg:px-20">
            {/* Texto */}
            <div className="flex-1 text-center text-black mb-10 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Precisando de um veterinário perto de você neste momento?
                </h1>
                <p className="text-base sm:text-lg lg:text-xl my-6">
                    Encontre atendimento 24h, serviços de emergência, especialistas, cuidados para animais exóticos e muito mais.
                </p>
                
            </div>

            {/* Imagem */}
            <div className="flex-1 flex justify-center">
                <img
                    src="imgs/amarelo.jpg"
                    alt="Atendimento"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-xl"
                />
            </div>
        </section>
    );
}

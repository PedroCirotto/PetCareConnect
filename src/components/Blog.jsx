export default function Blog() {
    return (
        <section className="space-y-8 mt-28 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#175EA8] text-center">
                Blog Pet Care: Venha aprender conosco!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
                {/* Card Template */}
                {[
                    {
                        img: "imgs/janeladog.jpg",
                        alt: "Cachorro lambendo a barriga",
                        href: "/blogcachorro",
                        title: "Cachorro lambendo a barriga excessivamente? – Pode ser alergia ou irritação na pele. Descubra como ajudar seu amigo!",
                    },
                    {
                        img: "imgs/gatodeitado.jpg",
                        alt: "Gato vomitando",
                        href: "/blogcachorro",
                        title: "Gato vomitando com frequência? – Veja se é algo simples ou se requer atenção veterinária.",
                    },
                    {
                        img: "imgs/exotico.jpeg",
                        alt: "Pets exóticos com apetite reduzido",
                        href: "/blogcachorro",
                        title: "Pets exóticos com apetite reduzido? – Saiba o que pode estar afetando seu pet e como agir.",
                    },
                    {
                        img: "imgs/cavalo.jpg",
                        alt: "Cavalo mancando",
                        href: "/blogcachorro",
                        title: "Cavalo mancando ou com dificuldade para se mover? – Pode ser problema nas articulações. Veja como tratar!",
                    }
                ].map(({ img, alt, title, href }, index) => (
                    <div key={index} className="flex flex-col justify-between w-full max-w-[250px] h-[100%] min-h-[200px] text-left bg-white rounded-lg p-4 shadow-xl">
                        <img className="w-full h-[100px] object-cover rounded-md" src={img} alt={alt} />
                        <h3 className="font-bold text-base text-center my-5 flex-1">
                            {title}
                        </h3>
                        <a className="underline text-[#1212ff] text-center" href={href}>Saiba mais</a>
                    </div>
                ))}
            </div>
        </section>


    );
}
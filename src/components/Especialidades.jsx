import React from 'react';

const Especialidades = () => {
    return (
        <section className="bg-white py-10 text-center px-4">
            <h1 className="text-3xl font-bold">
                Navegue por todas as <span className="text-blue-600">Especialidades</span> aqui
            </h1>
            <p className="text-lg mt-4">
                No Pet Care:Connect, oferecemos um catálogo abrangente e acessível com diversos profissionais veterinários para atender às suas necessidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-11/12 mx-auto">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img
                        src="imgs/cat+dog.jpg"
                        alt="Especialidade"
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Pets</h2>
                    <p className="text-base text-gray-700 mb-4">
                        Cães e gatos são pets queridos que vivem com os humanos, trazendo companhia e diversão para o dia a dia
                    </p>
                    <a href="#" className="text-blue-600 font-bold hover:underline">
                        Saiba mais
                    </a>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img
                        src="imgs/coelho.jpg"
                        alt="Especialidade"
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Pets Não Convencionais</h2>
                    <p className="text-base text-gray-700 mb-4">
                        Animais que não são nativos do ambiente em que vivem, sendo considerados exóticos e exigindo cuidados especiais para adaptação e bem-estar.
                    </p>
                    <a href="#" className="text-blue-600 font-bold hover:underline">
                        Saiba mais
                    </a>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img
                        src="imgs/cavalodesenho.jpg"
                        alt="Especialidade"
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Pets de Grande Porte</h2>
                    <p className="text-base text-gray-700 mb-4">
                        Animais de grande porte são aqueles que têm um tamanho superior ao habitual, destacando-se pela sua estatura imponente.
                    </p>
                    <a href="#" className="text-blue-600 font-bold hover:underline">
                        Saiba mais
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Especialidades;

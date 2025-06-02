import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogGatoVomitando() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 shadow-2xl rounded-lg my-4">
        <h1 className="text-xl font-semibold text-blue-800 mb-4">
          Gato vomitando excessivamente? Entenda as causas e saiba o que fazer
        </h1>

        <p className="mb-4">
          O vômito em gatos pode ser um sintoma comum e, às vezes, inofensivo. No entanto, se o seu gato estiver vomitando com frequência ou em grandes quantidades, é necessário investigar as causas. Algumas das possibilidades incluem:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li><strong>Bolas de pelo (tricobezoares):</strong> comuns em gatos que se lambem frequentemente;</li>
          <li><strong>Alimentação inadequada</strong> ou troca repentina de ração;</li>
          <li><strong>Parasitas intestinais</strong> ou infecções gastrointestinais;</li>
          <li><strong>Doenças hepáticas, pancreáticas ou renais;</strong></li>
          <li><strong>Corpos estranhos</strong> no trato digestivo (como brinquedos ou fios).</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Quando procurar um veterinário?</h2>
        <p className="mb-4">
          Casos pontuais de vômito podem não ser preocupantes. Porém, atenção se houver:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Vômitos frequentes por mais de 24 horas;</li>
          <li>Presença de sangue ou bile no conteúdo vomitado;</li>
          <li>Letargia, perda de apetite, emagrecimento;</li>
          <li>Diarreia ou sinais de dor abdominal;</li>
          <li>Desidratação evidente (pele ressecada, olhos fundos).</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Diagnóstico veterinário</h2>
        <p className="mb-4">
          O veterinário pode realizar exames como:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Ultrassonografia abdominal;</li>
          <li>Hemograma completo e bioquímica;</li>
          <li>Exames de fezes para parasitas;</li>
          <li>Teste de função hepática e renal;</li>
          <li>Endoscopia (em casos mais graves).</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Cuidados imediatos em casa</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Retirar o alimento por 12 horas (em gatos adultos saudáveis);</li>
          <li>Oferecer água em pequenas quantidades e com frequência;</li>
          <li>Evitar ração seca — prefira alimentação úmida por alguns dias;</li>
          <li>Escovar o pelo regularmente para reduzir bolas de pelo;</li>
          <li>Utilizar rações específicas para gatos com sensibilidade gastrointestinal (sob orientação veterinária).</li>
        </ul>

        <div className="border-l-4 border-blue-500 pl-4 mb-6">
          <h3 className="text-blue-700 font-semibold text-lg">
            🚑 Emergência: quando o vômito é sinal de algo grave?
          </h3>
          <p className="mt-2">
            Em casos de vômito com sangue, sinais neurológicos (como convulsões), ou total recusa alimentar por mais de 24h, procure atendimento veterinário emergencial imediatamente.
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-2">Prevenção é essencial</h2>
        <p className="mb-4">
          Mantenha a alimentação do seu gato estável e de boa qualidade. Evite mudanças bruscas, escove o pelo com frequência e garanta um ambiente limpo e seguro, livre de objetos pequenos que possam ser engolidos.
        </p>
        <p className="mb-6">
          Consultas veterinárias regulares ajudam a identificar precocemente qualquer alteração e garantem a saúde do seu pet.
        </p>
      </div>
      <Footer />
    </>
  );
}

// import "@/css/blog.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Blogcachorro() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 shadow-2xl rounded-lg my-4">
      <h1 className="text-xl font-semibold text-blue-800 mb-4">
        Cachorro lambendo a barriga excessivamente? Fique atento!
      </h1>

      <p className="mb-4">
        Se o seu cão está lambendo a barriga com frequência, isso pode indicar alguns problemas como:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-1">
        <li><strong>Alergias alimentares</strong> ou sazonais (pólen, poeira, picadas de insetos);</li>
        <li><strong>Dermatites ou irritações</strong> na pele causadas por pulgas ou fungos;</li>
        <li><strong>Ansiedade ou tédio</strong>, que causam comportamentos compulsivos.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Quando procurar um veterinário?</h2>
      <p className="mb-4">
        Se os lambidos forem constantes e causarem vermelhidão, perda de pelos ou feridas, é essencial procurar ajuda profissional. O veterinário pode indicar:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Testes de alergia;</li>
        <li>Exames dermatológicos;</li>
        <li>Medicação apropriada (antialérgicos, antifúngicos, etc.).</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Dicas para aliviar o incômodo em casa</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Banhos com shampoos suaves ou calmantes (com orientação);</li>
        <li>Uso de colar elizabetano para evitar o excesso de lambidas na área afetada;</li>
        <li>Trocar a ração por uma opção hipoalergênica, sob prescrição;</li>
        <li>Oferecer distrações interativas com brinquedos e petiscos.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Prevenção é sempre o melhor remédio</h2>
      <p className="mb-4">
        Manter o ambiente limpo, a alimentação em dia e observar uma boa interação são formas de prevenir problemas de pele e comportamento nos cães.
      </p>
      <p className="mb-6">
        Em caso de dúvida, sempre consulte um veterinário de confiança.
      </p>

      <div className="border-l-4 border-blue-500 pl-4 mb-6">
        <h3 className="text-blue-700 font-semibold text-lg">
          💉 Vacinação em Cães: Proteção e Saúde em Dia
        </h3>
        <p className="mt-2">
          A vacinação é essencial para prevenir diversas doenças graves. Mesmo cães saudáveis, mas que não são vacinados,
          podem ficar suscetíveis a doenças como cinomose, parvovirose e raiva.
        </p>
        <p className="mt-2">
          Manter as vacinas em dia é um ato de responsabilidade.
        </p>
      </div>

      <h2 className="text-lg font-semibold mb-2">Vacinas obrigatórias e recomendadas</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li><strong>V8 ou V10:</strong> Protegem contra cinomose, parvovirose, hepatite infecciosa, adenovirose, etc.</li>
        <li><strong>Antirrábica:</strong> Protege contra a raiva. É obrigatória e deve ser aplicada a partir de 4 meses com reforço anual.</li>
        <li><strong>Gripe:</strong> Protege contra tosse e secreções graves. Dose anual.</li>
        <li><strong>Giárdia:</strong> Protege contra giardíase, que causa diarreia grave. Indicada principalmente em áreas com água contaminada.</li>
        <li><strong>Leishmaniose:</strong> Em regiões endêmicas, cães com risco devem ser vacinados sob orientação do veterinário.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Calendário de vacinação</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li><strong>Filhotes:</strong> Iniciar aos 45 dias com orientação veterinária. Esquema até 4 doses.</li>
        <li><strong>Adultos:</strong> Reforços anuais de todas as vacinas.</li>
        <li><strong>Idosos:</strong> Também devem ser vacinados, com atenção ao estado de saúde.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Campanhas de vacinação gratuita</h2>
      <p className="mb-2">
        Muitas cidades oferecem campanhas de vacinação gratuitas para raiva e outras doenças.
      </p>
      <p className="mb-2">
        Verifique com a prefeitura ou centro de zoonoses do seu município.
      </p>
      <p className="mb-6">
        Vacinar seu cão é um gesto de amor e proteção — além de proteger seu pet, você colabora com a saúde pública e evita a disseminação de doenças.
      </p>
      </div>
      <Footer />
    </>
  );
}
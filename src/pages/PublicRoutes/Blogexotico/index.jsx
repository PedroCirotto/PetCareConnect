import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogPetsExoticosApetite() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 shadow-2xl rounded-lg my-4">
        <h1 className="text-xl font-semibold text-blue-800 mb-4">
          Pets exóticos com apetite reduzido? Saiba o que pode estar acontecendo
        </h1>

        <p className="mb-4">
          Animais exóticos — como répteis, aves, roedores e mamíferos não convencionais — possuem fisiologia e hábitos alimentares muito específicos. A perda de apetite (hiporexia ou anorexia) nesses animais é sempre motivo de atenção e pode indicar distúrbios ambientais, nutricionais ou clínicos.
        </p>

        <h2 className="text-lg font-semibold mb-2">Principais causas de apetite reduzido</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li><strong>Temperatura inadequada:</strong> Répteis, por exemplo, dependem de calor para metabolizar corretamente os alimentos.</li>
          <li><strong>Estresse ambiental:</strong> Mudanças no ambiente, barulho, manuseio excessivo ou novo companheiro no recinto podem causar estresse.</li>
          <li><strong>Dieta incorreta:</strong> Fornecer alimentos inadequados ou monótonos pode levar à recusa alimentar.</li>
          <li><strong>Problemas dentários:</strong> Comum em roedores e lagomorfos, como coelhos, cujos dentes crescem continuamente.</li>
          <li><strong>Doenças infecciosas ou parasitárias:</strong> Algumas silenciosas, como criptosporidiose, coccidiose ou micoplasmose aviária.</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Sinais de alerta</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Perda de peso perceptível;</li>
          <li>Fezes alteradas ou ausência de defecação;</li>
          <li>Letargia e isolamento do grupo (em espécies sociais);</li>
          <li>Respiração ruidosa ou esforço respiratório (em aves);</li>
          <li>Postura anormal ou tremores.</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">O que fazer ao notar a redução do apetite?</h2>
        <p className="mb-4">
          Em primeiro lugar, **evite forçar a alimentação** e **não mude drasticamente a dieta** sem orientação. Busque um veterinário especializado em animais silvestres ou exóticos, pois o tratamento dependerá da espécie e da causa envolvida.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Realizar um check-up clínico e exames laboratoriais;</li>
          <li>Verificar condições de temperatura, umidade e iluminação do recinto;</li>
          <li>Ajustar a dieta conforme espécie e fase da vida;</li>
          <li>Reduzir estressores ambientais e promover enriquecimento;</li>
          <li>Em casos graves, pode ser necessária alimentação assistida com seringas ou sondas (sob supervisão).</li>
        </ul>

        <div className="border-l-4 border-blue-500 pl-4 mb-6">
          <h3 className="text-blue-700 font-semibold text-lg">
            🦜 Atenção redobrada com aves e répteis
          </h3>
          <p className="mt-2">
            Aves com hiporexia costumam ocultar sinais de doença até estados avançados. Já répteis podem entrar em bruma ou hibernação — mas isso só é normal em condições naturais específicas e deve ser avaliado por um profissional.
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-2">Prevenção é fundamental</h2>
        <p className="mb-4">
          Antes de adotar um pet exótico, informe-se profundamente sobre suas necessidades específicas. O manejo inadequado é uma das principais causas de problemas alimentares.
        </p>
        <p className="mb-6">
          Um ambiente adequado, alimentação balanceada, acompanhamento veterinário e observação diária são os pilares para a saúde desses animais tão especiais.
        </p>
      </div>
      <Footer />
    </>
  );
}

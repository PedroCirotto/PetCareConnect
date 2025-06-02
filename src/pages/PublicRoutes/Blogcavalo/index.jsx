import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogCavaloMancando() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 shadow-2xl rounded-lg my-4">
        <h1 className="text-xl font-semibold text-blue-800 mb-4">
          Cavalo mancando ou com dificuldade para se mover? Entenda o que pode estar acontecendo
        </h1>

        <p className="mb-4">
          A claudicação (mancada) em equinos é um sinal clínico comum que indica dor, inflamação ou anormalidades estruturais nos membros. Pode ter origem ortopédica, neurológica, muscular ou até sistêmica, e exige investigação cuidadosa por um médico-veterinário especializado em clínica de equinos.
        </p>

        <h2 className="text-lg font-semibold mb-2">Causas mais comuns de claudicação</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li><strong>Lesões musculoesqueléticas:</strong> Entorses, distensões, fraturas ou luxações;</li>
          <li><strong>Problemas articulares:</strong> Artrites sépticas, sinovites ou degenerações crônicas (ex: osteoartrite);</li>
          <li><strong>Afecções dos cascos:</strong> Laminite, abcessos, podridão do casco (septicemia), má ferradura;</li>
          <li><strong>Distúrbios neuromusculares:</strong> Ataxia, mielopatia cervical, ou compressão medular;</li>
          <li><strong>Infecções ou doenças sistêmicas:</strong> Leptospirose, erliquiose, tétano ou doenças virais que causam dor e rigidez.</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Como identificar o tipo e a gravidade da claudicação</h2>
        <p className="mb-4">
          O grau da mancada pode variar de leve a severo. Observar em qual membro ocorre a alteração, em que momento do movimento (passo, trote ou galope), e se há outros sinais (calor, inchaço, sensibilidade ao toque) ajuda o veterinário no diagnóstico.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li><strong>Grau I:</strong> Claudicação leve, perceptível apenas durante exercícios;</li>
          <li><strong>Grau II-III:</strong> Claudicação visível ao caminhar ou trotar;</li>
          <li><strong>Grau IV-V:</strong> Claudicação severa, cavalo evita apoiar o membro afetado ou está em decúbito.</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Condutas imediatas</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Imobilizar ou restringir o movimento do animal até avaliação;</li>
          <li>Evitar uso de anti-inflamatórios sem orientação veterinária — isso pode mascarar sintomas;</li>
          <li>Aplicar compressas frias nas primeiras 24–48h, se houver inchaço ou calor;</li>
          <li>Inspecionar o casco, procurando corpos estranhos, rachaduras ou sensibilidade localizada;</li>
          <li>Chamar um veterinário equino com urgência.</li>
        </ul>

        <div className="border-l-4 border-blue-500 pl-4 mb-6">
          <h3 className="text-blue-700 font-semibold text-lg">
            🐎 Ferrageamento adequado é essencial
          </h3>
          <p className="mt-2">
            A má distribuição de peso, desequilíbrio no aprumo e ferraduras mal ajustadas estão entre as maiores causas de dor e claudicação em cavalos atletas. O acompanhamento regular com um bom ferrador e veterinário ortopédico é indispensável.
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-2">Exames diagnósticos mais utilizados</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Palpação e inspeção dinâmica;</li>
          <li>Teste de flexão articular e bloqueios anestésicos;</li>
          <li>Radiografias, ultrassonografia e termografia;</li>
          <li>Exames laboratoriais, em casos de doenças infecciosas ou sistêmicas.</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Prevenção e cuidados de rotina</h2>
        <p className="mb-4">
          Garantir bom manejo, piso adequado, suplementação mineral balanceada e treinos progressivos com descanso apropriado é fundamental para prevenir lesões locomotoras. O check-up ortopédico anual é altamente recomendado, especialmente para cavalos de trabalho ou competição.
        </p>

        <p className="mb-6">
          Dificuldade de locomoção nunca deve ser negligenciada. Um diagnóstico precoce pode evitar danos irreversíveis e melhorar significativamente a qualidade de vida do animal.
        </p>
      </div>
      <Footer />
    </>
  );
}

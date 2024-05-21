import styled from "styled-components";

const Footerr = styled.footer`
  background-color: rgb(40, 175, 130);
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  margin: 0 30px 6px 30px;
`;

const FooterRow = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: rgb(96, 90, 90);

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  a {
    color: rgb(83, 79, 79);
    list-style: none;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }

  h2 {
    color: #eee;
  }
`;

const HrLinha = styled.hr`
  border: 1px solid #f5f5f57a;
  width: 96%;
  margin: 20px auto;
`;

const SocialMediaIcons = styled.div`
  a img {
    display: inline-block;
    padding: 10px;
    margin: 0 30px 6px 30px;
    height: 50px;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

const FooterCopy = styled.p`
  color: rgba(0, 0, 0, 0.56);
  margin-top: 10px;
`;

function Footer() {
  return (
    <>
      <Footerr>
        <FooterContent>
          <FooterRow class="footer-row">
            <h2>Sobre nós</h2>
            <ul>
              <a href="#">
                <li>Nossa empresa</li>
              </a>
              <a href="#">
                <li>Nossos serviços</li>
              </a>
              <a href="#">
                <li>Atendimento ao cliente</li>
              </a>
              <a href="#">
                <li>Compliance e Privacidade</li>
              </a>
              <a href="#">
                <li>Código de Ética e Conduta</li>
              </a>
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>Carreiras</h2>
            <ul>
              <a href="#">
                <li>Central de carreiras</li>
              </a>
              <a href="#">
                <li>Trabalhe conosco</li>
              </a>
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>Impacto social</h2>
            <ul>
              <a href="#">
                <li>Comunidade</li>
              </a>
              <a href="#">
                <li>Meio ambiente</li>
              </a>
              <a href="#">
                <li>Fornecimento ético</li>
              </a>
              <a href="#">
                <li>Conexão com clientes</li>
              </a>
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>PetCare:Connect vínculos</h2>
            <ul>
              <a href="#">
                <li>Termos & Condições</li>
              </a>
              <a href="#">
                <li>Termos & Condições dos vínculos</li>
              </a>
              <a href="#">
                <li>Termos & Condições do atendimento</li>
              </a>
            </ul>
          </FooterRow>
        </FooterContent>
        <HrLinha class="hr-linha" aria-hidden="true" />
        <SocialMediaIcons class="social-media-icons">
          <a href="#">
            <img src="imgs/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="imgs/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="imgs/twitter.png" alt="" />
          </a>
        </SocialMediaIcons>
        <FooterCopy class="footer-copyright">
          © 2024 Pet Care Connect. Todos os direitos reservados.
        </FooterCopy>
      </Footerr>
    </>
  );
}

export default Footer;

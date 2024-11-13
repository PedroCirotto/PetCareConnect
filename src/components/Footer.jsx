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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
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
    list-style: none;
  }

  a {
    color: rgb(43, 43, 43);
    list-style: none;
    text-decoration: none;
    font-family: 700;
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
              <li><a href="#">Nossa empresa</a></li>
              <li><a href="#">Nossos serviços</a></li>
              <li><a href="#">Atendimento ao cliente</a></li>
              <li><a href="#">Compliance e Privacidade</a></li>
              <li><a href="#">Código de Ética e Conduta</a></li>
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>Carreiras</h2>
            <ul>
                <li><a href="#">Central de carreiras</a></li>
                <li><a href="#">Trabalhe conosco</a></li>              
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>Impacto social</h2>
            <ul>
              <li><a href="#">Comunidade</a></li>              
              <li><a href="#">Meio ambiente</a></li>              
              <li><a href="#">Fornecimento ético</a></li>              
              <li><a href="#">Conexão com clientes</a></li>                            
            </ul>
          </FooterRow>
          <FooterRow class="footer-row">
            <h2>PetCare:Connect vínculos</h2>
            <ul>
              <li><a href="#">Termos & Condições</a></li>                            
              <li><a href="#">Termos & Condições dos vínculos</a></li>                            
              <li><a href="#">Termos & Condições do atendimento</a></li>                                          
            </ul>
          </FooterRow>
        </FooterContent>
        <HrLinha class="hr-linha" aria-hidden="true" />
        <SocialMediaIcons class="social-media-icons">
          <a href="#" aria-label="Facebook">
            <img src="imgs/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="imgs/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="imgs/twitter.png" alt="Twitter" />
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

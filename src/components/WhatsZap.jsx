import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  .telegram {
    padding: 1rem;
    width: 54px;
    height: 50px;
    border-radius: 100%;
    background-color: #2ca4d4;
    color: #ffffff;
  }
`;

function WhatsZap() {
  return (
    <Container>
      <a href="https://helenapetcare-bot.tg.pulse.is" target="blank" aria-label="Telegram">
        <FaTelegram className="telegram" />
      </a>
    </Container>
  );
}

export default WhatsZap;

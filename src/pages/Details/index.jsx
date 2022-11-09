import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";


export function Details() {
  return (
    <Container>

      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat, obcaecati. Voluptates porro harum
            consectetur modi odit, totam dolorum dolor ipsam
            autem possimus itaque tempora officia! Quod commodi
            consequuntur in similique.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>




          <Button title="Voltar" />

        </Content>
      </main>

    </Container>
  );
}
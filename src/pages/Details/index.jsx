import { Container, Links, Content } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo natus recusandae quos beatae aliquam distinctio nisi at reiciendis obcaecati consequatur modi alias dicta odio, expedita quaerat optio, est labore?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://react.com</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>


          <Button title="Voltar" loading />
        </Content>
      </main>

    </Container>
  )
}

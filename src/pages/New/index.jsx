import { useState } from "react";
import { Link } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function New() {
  const [links, setLinks] = useState([]);

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    const [newLink, setNewLink] = useState("");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  );
}

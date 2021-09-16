import React, { useState, useEffect } from "react";
import { Form, Card, Col, Container } from "react-bootstrap";
import Select from "react-select";

import Button from "react-bootstrap/Button";

const Fetches = () => {
  const [quote, setQuote] = useState();
  const [characters, setCharacters] = useState([]);
  const [quests, setQuests] = useState([]);
  const [quest, setQuest] = useState();
  const [character, setCharacter] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const rawCharacters = await fetch(
        "http://witcher3api.com/api/characters"
      );
      const allCharacters = await rawCharacters.json();

      setCharacters(allCharacters);
      const rawQuests = await fetch("http://witcher3api.com/api/quests");
      const allQuests = await rawQuests.json();

      setQuests(allQuests);

      /*  console.log("witchers", witchers);

      console.log(characterNames); */
    };

    fetchData();
  }, []);

  console.log(quests);
  const changeHandler = (e) => {
    console.log(e.value);
    setCharacter(e.value);
  };

  const fetchCharacter = () => {
    const characterData = characters.filter((i) => i.name === character);
    console.log(characterData);

    /*    const data = characters.filter((j) => ) */
  };

  console.log(character);
  const fetchQuest = () => {
    const questData = quests.filter((i) => i.name === quest);
    console.log(questData);

    /*    const data = characters.filter((j) => ) */
  };

  const fetchCharactersQuests = () => {
    const charactersQuests = quests.filter((i) =>
      i.characters.includes(character)
    );
    console.log(charactersQuests);
  };

  return (
    <Container>
      <Card>
        <Form>
          <Col></Col>
          <Col>
            <Form.Group>
              <Form.Label>Choose character</Form.Label>
              <Select
                options={characters?.map((i) => ({
                  value: i.name,
                  label: i.name,
                }))}
                onChange={(e) => changeHandler(e)}
              />{" "}
              <Button onClick={fetchCharacter}>Find character!</Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Choose quest</Form.Label>
              <Select
                options={quests?.map((i) => ({
                  value: i.name,
                  label: i.name,
                }))}
                onChange={(e) => changeHandler(e)}
              />
              <Button onClick={fetchQuest}>Find quest!</Button>
            </Form.Group>
            <Form.Group>
              <Button onClick={fetchCharactersQuests}>
                Find quests of {character}!
              </Button>
            </Form.Group>
          </Col>
        </Form>
        <Col></Col>
      </Card>
    </Container>
  );
};

export default Fetches;

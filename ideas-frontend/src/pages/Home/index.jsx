import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { useEffect, useState } from "react";
const Home = () => {
  const [people, setPeople] = useState([]);

  const pegarPeople = async () => {
    const response = await fetch("/api/people");
    if (!response.ok) {
      console.error("Erro ao buscar pessoas");
      return;
    }
    const data = await response.json();
    setPeople(data);
    console.log(data);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col pt-20 px-36">
      <h1>Lista de afazeres</h1>
      <Button onClick={pegarPeople}>Carregar Pessoas</Button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

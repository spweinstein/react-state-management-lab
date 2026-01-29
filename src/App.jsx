// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (fighter) => {
    // Does player have enough money to afford the character?
    // If yes:
    //  -Update zombieFighters to exclude the character that was clicked on
    //  -Subtract character's price from current money value
    //  -Add fighter to player's team
    // If no:
    //  -log "not enough money"
    console.log(fighter);
    if (fighter.price > money) {
      console.log("Not enough money to afford this fighter!");
    } else {
      setZombieFighters(
        zombieFighters.filter((otherFighter) => otherFighter.id != fighter.id),
      );
      setMoney(money - fighter.price);
      setTeam([...team, fighter]);
    }
  };

  const handleRemoveFighter = (fighter) => {
    //  -Update team to exclude the character that was clicked on
    //  -Add character's price to current money value
    //  -Remove fighter from player's team
    console.log(fighter);
    setTeam(team.filter((otherFighter) => otherFighter.id != fighter.id));
    setMoney(money + fighter.price);
    setZombieFighters([...zombieFighters, fighter]);
  };

  const teamList =
    team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      team.map((fighter, index) => (
        <li key={fighter.id}>
          <h4>{fighter.name}</h4>
          <img src={fighter.img} />
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
      ))
    );

  let totalStrength = 0;
  let totalAgility = 0;
  team.forEach((teamMember) => {
    totalStrength += teamMember.strength;
    totalAgility += teamMember.agility;
  });

  return (
    <>
      <h3>Money:</h3>
      <p>{money}</p>
      <h3>Total Strength:</h3>
      <p>{totalStrength}</p>
      <h3>Total Agility:</h3>
      <p>{totalAgility}</p>
      <h3>Team:</h3>

      <ul>{teamList}</ul>
      <h3>Fighters:</h3>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={fighter.id}>
            <h4>{fighter.name}</h4>
            <img src={fighter.img} />
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

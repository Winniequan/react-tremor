import React from "react";

import { Card, List, ListItem, Title } from "@tremor/react";

const names = [
  {
    name: "Anna",
    score: "89",
  },
  {
    name: "Bob",
    score: "91",
  },
  {
    name: "Tom",
    score: "87",
  },
  {
    name: "Jake",
    score: "79",
  },
  {
    name: "Claire",
    score: "96",
  },
  {
    name: "Chris",
    score: "90",
  },
];

const ScoreList = () => {
  return <Card className="max-w-full py-4">
     <Title>Student's Score</Title>
     <List>
       {names.map((item) => (
         <ListItem key={item.name}>
           <span>{item.name}</span>
           <span>{item.score}</span>
         </ListItem>
       ))}
     </List>
   </Card>;
};

export default ScoreList;

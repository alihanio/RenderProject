import React from "react";
import { USERS } from "../constans";
import PeopleItem from "./PeopleItem";

const PeoplesList = () => {
  function showId(id) {
    alert(`Users id = ${id}`);
  }

  return (
    <div className="list">
      {USERS.map((user) => {
        return (
          <PeopleItem onClick={() => showId(user.id)} key={user.id} {...user} />
        );
      })}
    </div>
  );
};

export default PeoplesList;

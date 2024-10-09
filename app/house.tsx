"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { House, SwornMember } from "./types";

interface Props {
  houses: House[];
}

const ClientComponent: React.FC<Props> = ({ houses }) => {
  return (
    <div>
      {houses.map((house, houseIndex) => {
        return (
          <Accordion key={houseIndex}>
            <AccordionItem title={house.name}>
              <ul>
                {house.swornMembers.length === 0 && <li>No sworn members</li>}
                {(house.swornMembers as SwornMember[]).map(
                  (member: SwornMember, index) => (
                    <li key={index}>
                      {member.name} :{" "}
                      {member.died ? "Died: " + member.died : "Still alive"}
                    </li>
                  ),
                )}
              </ul>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ClientComponent;

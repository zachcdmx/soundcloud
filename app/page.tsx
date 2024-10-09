import { House } from "./types";
import ClientComponent from "./house";

export default async function Home() {
  const data = await fetch("https://anapioficeandfire.com/api/houses");
  let houses: House[] = await data.json();

  houses = await Promise.all(
    houses.map(async (house) => {
      const members = await Promise.all(
        house.swornMembers.map(async (member) => {
          const res = await fetch(member);
          const data = await res.json();

          return data;
        }),
      );

      return { ...house, swornMembers: members } as House;
    }),
  );

  return <ClientComponent houses={houses} />;
}

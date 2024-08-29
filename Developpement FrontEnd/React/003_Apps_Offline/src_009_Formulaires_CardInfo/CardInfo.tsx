import React from 'react';

type Props = {
  name: String;
  favSports: Array<String>;
  about: String;
  country: String;
  sex: String;
};

function CardInfo({ name, favSports, about, country, sex }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h3>Name: {name}</h3>
      <p>Sex: {sex}</p>
      <p>Country: {country}</p>
      <div className="flex flex-col gap-2">
        <p>Fav Sports :</p>
        <ul className="pl-4">
          {favSports.map((e, i) => (
            <li key={i} className="first-letter:uppercase">
              - {e}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>About:</p>
        <p className="pl-4 text-gray-600 w-full">{about}</p>
      </div>
    </div>
  );
}

export default CardInfo;

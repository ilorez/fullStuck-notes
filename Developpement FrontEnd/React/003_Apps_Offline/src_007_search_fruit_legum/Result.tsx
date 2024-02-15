import React from "react";
type dataI = {
  name: string;
  type: string;
};

type Props = {
  result: Array<dataI>;
};

function Result({ result }: Props) {
  return (
    <div className="bg-gray-500">
      <h2> Result </h2>
      <ul>
        {result.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;

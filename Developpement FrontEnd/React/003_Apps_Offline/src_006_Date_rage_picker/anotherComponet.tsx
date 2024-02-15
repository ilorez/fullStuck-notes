import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyApp() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <>
      <div>
        <DateRangePicker onChange={onChange} value={value} />
      </div>
    </>
  );
}

// import { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "React",
    A: 100,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "UI and UX",
    A: 82,
    B: 21,
    fullMark: 150,
  },
  {
    subject: "Nodejs",
    A: 100,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Ingles",
    A: 69,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Redux",
    A: 65,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "React-Router",
    A: 85,
    B: 85,
    fullMark: 150,
  },
];

export function Grafic() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="A"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

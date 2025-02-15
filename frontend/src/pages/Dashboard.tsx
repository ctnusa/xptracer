import { GaugeComponent } from "react-gauge-component";
import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  BarChart,
} from "recharts";

import { CaretUp, LineVertical } from "@phosphor-icons/react";
import Card from "../components/Card";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 6000 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 h-screen">
      <div className="flex flex-wrap gap-3 w-full">
        <Card
          title="Bank Balance"
          className="flex-grow flex flex-col items-center text-center"
        >
          <div className="text-secondary">
            <p className="text-2xl font-bold mb-2">$12,500</p>
            <div className="flex gap-2 text-quinary">
              <CaretUp size={20} weight="fill" className="" />
              <p className="">$12,300</p>
              |
              <CaretUp size={20} weight="fill" className="" />
              <p className="">30%</p>
            </div>
          </div>
        </Card>
        <Card title="Revenue" className="flex-grow text-center">
          <p className="text-2xl font-bold">$7,500</p>
        </Card>
        <Card title="Tax Deductions" className="flex-grow text-center">
          <p className="text-2xl font-bold">$1,500</p>
        </Card>
        <Card title="Expenses" className="flex-grow text-center">
          <p className="text-2xl font-bold">$2,500</p>
        </Card>
        <Card title="Saving" className="flex-grow text-center">
          <p className="text-2xl font-bold">$5,000</p>
        </Card>
      </div>

      {/* <div className=" bg-white rounded-sm shadown-sm">
        <GaugeComponent
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            // gradient: true,
            subArcs: [
              {
                limit: 15,
                color: "#EA4228",
                showTick: true,
                tooltip: {
                  text: "Too low temperature!",
                },
                onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                onMouseMove: () =>
                  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                onMouseLeave: () =>
                  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
              },
              {
                limit: 17,
                color: "#F5CD19",
                showTick: true,
                tooltip: {
                  text: "Low temperature!",
                },
              },
              {
                limit: 28,
                color: "#5BE12C",
                showTick: true,
                tooltip: {
                  text: "OK temperature!",
                },
              },
              {
                limit: 30,
                color: "#F5CD19",
                showTick: true,
                tooltip: {
                  text: "High temperature!",
                },
              },
              {
                color: "#EA4228",
                tooltip: {
                  text: "Too high temperature!",
                },
              },
            ],
          }}
          pointer={{
            color: "#345243",
            length: 0.8,
            width: 15,
            // elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: (value) => value + "ºC" },
            tickLabels: {
              type: "outer",
              defaultTickValueConfig: {
                formatTextValue: (value: any) => value + "ºC",
                style: { fontSize: 10 },
              },
              ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
            },
          }}
          value={22.5}
          minValue={10}
          maxValue={35}
        />
      </div>
      <div className=" bg-white rounded-sm shadown-sm">
        <GaugeComponent
          arc={{
            subArcs: [
              {
                limit: 20,
                color: "#EA4228",
                showTick: true,
              },
              {
                limit: 40,
                color: "#F58B19",
                showTick: true,
              },
              {
                limit: 60,
                color: "#F5CD19",
                showTick: true,
              },
              {
                limit: 100,
                color: "#5BE12C",
                showTick: true,
              },
            ],
          }}
          value={27}
        />
      </div>

      <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
          Monthly Sales
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={0}>
            <XAxis dataKey="month" className="text-sm" />
            <YAxis className="text-sm" />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
            />
            <Bar
              dataKey="sales"
              fill="#6366F1"
              barSize={40}
              className="rounded-md"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
          Monthly Sales
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={0}>
            <XAxis dataKey="month" className="text-sm" />
            <YAxis className="text-sm" />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
            />
            <Bar
              dataKey="sales"
              fill="#6366F1"
              barSize={40}
              className="rounded-md"
            />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default Dashboard;

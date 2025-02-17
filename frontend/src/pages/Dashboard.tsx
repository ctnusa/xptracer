import { GaugeComponent } from "react-gauge-component";
import React, { PureComponent, useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  BarChart,
} from "recharts";

import { CaretUp, LineVertical } from "@phosphor-icons/react";
import Card from "../components/Card";

const data = [
  {
    name: "Page A",
    income: 4000,
    expense: 2400,
    save: 1600,
  },
];

const Dashboard = () => {
  const [monthData, setMonthData] = useState<any>([]);
  const [yearData, setYearData] = useState<any>([]);
  const [expenseData, setExpenseData] = useState<any>([]);
  const [incomeData, setIncomeData] = useState<any>([]);

  useEffect(() => {
    const monthData = [
      { month: "Jan", income: 4000, expense: 3200, save: 800 },
      { month: "Feb", income: 3000, expense: 1500, save: 1500 },
      { month: "Mar", income: 5000, expense: 4500, save: 500 },
      { month: "Apr", income: 7000, expense: 2600, save: 4400 },
      { month: "May", income: 6000, expense: 3400, save: 1600 },
      { month: "Jun", income: 6000, expense: 4125, save: 1875 },
      { month: "Jul", income: 4570, expense: 7000, save: 1200 },
      { month: "Aug", income: 9700, expense: 2000, save: 7700 },
      { month: "Sep", income: 8430, expense: 6700, save: 1730 },
      { month: "Oct", income: 4800, expense: 9800, save: 1300 },
      { month: "Nov", income: 7000, expense: 1200, save: 5800 },
      { month: "Dec", income: 1000, expense: 1800, save: 0 },
    ];
    const yearData = [
      { name: "random", income: 7000, expense: 5000 }, // Customize color
    ];
    setMonthData(monthData);
    setYearData(yearData);
    setExpenseData([
      { name: "groceries", value: 7000, color: "#8884d8" }, // Customize color
      { name: "gas", value: 1000, color: "#82ca9d" }, // Customize color
      { name: "car insurance", value: 1800, color: "#EDA62D" }, // Customize color
      { name: "rent", value: 4500, color: "#47D1FF" }, // Customize color
    ]);
    setIncomeData([
      { name: "job", value: 85000, color: "#8884d8" }, // Customize color
      { name: "tax return", value: 3700, color: "#82ca9d" }, // Customize color
      { name: "gift", value: 800, color: "#EDA62D" }, // Customize color
      { name: "tutor", value: 4500, color: "#47D1FF" }, // Customize color
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-screen">
      <div className="flex flex-wrap gap-3 w-full">
        <Card
          title="Bank Balance"
          className="flex-grow flex-1 flex flex-col items-center text-center "
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
        <Card title="Yearly Revenue" className="flex-grow flex-1 text-center">
          <p className="text-2xl font-bold">$7,500</p>
        </Card>
        <Card
          title="Yearly Tax Deductions"
          className="flex-grow flex-1 text-center"
        >
          <p className="text-2xl font-bold">$1,500</p>
        </Card>
        <Card title="Expenses" className="flex-grow flex-1 text-center">
          <p className="text-2xl font-bold">$2,500</p>
        </Card>
        <Card title="Saving" className="flex-grow flex-1 text-center">
          <p className="text-2xl font-bold">$5,000</p>
        </Card>
        <Card title="Goal" className="flex-grow flex-1 text-center">
          <div className="flex gap-1 flex-col">
            <div className="flex gap-1 justify-between">
              <p className="text-xs font-bold">Buying House</p>
              <p className="text-xs font-bold">50%</p>
            </div>
            <div className="flex gap-1 justify-between">
              <p className="text-xs font-bold">Buying Car</p>
              <p className="text-xs font-bold">1%</p>
            </div>
            <div className="flex gap-1 justify-between">
              <p className="text-xs font-bold">Buying Land</p>
              <p className="text-xs font-bold">0%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Card
          title="Expenses Breakdown"
          className="flex-grow flex-1 text-center"
        >
          <div className="w-full h-65">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={80}
                  label={({ x, y, value, percent, index }) => {
                    const entry = expenseData[index];
                    return (
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Inter"
                        fill={entry.color}
                        className="text-xs"
                      >
                        {`$${value.toLocaleString()}`}
                      </text>
                    );
                  }}
                  labelLine={false}
                >
                  {expenseData.map((entry: any, index: any) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ payload }) => (
                    <div className="p-2 border border-disable bg-secondary rounded-lg text-primary text-xs">
                      {payload && payload.length ? (
                        payload.map((entry, index) => (
                          <div key={index} className="">
                            <span>{entry.name}: </span>
                            <span>${entry.value?.toLocaleString()}</span>
                          </div>
                        ))
                      ) : (
                        <div>No data available</div>
                      )}
                    </div>
                  )}
                />
                <Legend
                  wrapperStyle={{
                    fontSize: "12px",
                    fontFamily: "Inter",
                    color: "#333",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card
          title="Income Breakdown"
          className="flex-grow flex-1 text-center"
        >
          <div className="w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <ResponsiveContainer width={"100%"}>
                <PieChart>
                  <Pie
                    data={incomeData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={80}
                    label={({ x, y, value, percent, index }) => {
                      const entry = incomeData[index];
                      return (
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontFamily="Inter"
                          fill={entry.color}
                          className="text-xs"
                        >
                          {`$${value.toLocaleString()}`}
                        </text>
                      );
                    }}
                    labelLine={false}
                  >
                    {incomeData.map((entry: any, index: any) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ payload }) => (
                      <div className="p-2 border border-disable bg-secondary rounded-lg text-primary text-xs">
                        {payload && payload.length ? (
                          payload.map((entry, index) => (
                            <div key={index} className="">
                              <span>{entry.name}: </span>
                              <span>${entry.value?.toLocaleString()}</span>
                            </div>
                          ))
                        ) : (
                          <div>No data available</div>
                        )}
                      </div>
                    )}
                  />
                  <Legend
                    wrapperStyle={{
                      fontSize: "12px",
                      fontFamily: "Inter",
                      color: "#333",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barGap={20}
                barSize={30}
              >
                <XAxis dataKey="name" tick={false} />
                <Legend
                  wrapperStyle={{
                    fontSize: "12px",
                    fontFamily: "Inter",
                    color: "#333",
                  }}
                />
                <Bar
                  dataKey="income"
                  fill="#8884d8"
                  label={({ payload, x, y, value }) => (
                    <text
                      x={x + 30 / 2}
                      y={y}
                      fill="#8884d8"
                      dy={-6}
                      textAnchor="middle"
                      className="text-xs"
                    >
                      ${value.toLocaleString()}
                    </text>
                  )}
                />
                <Bar
                  dataKey="expense"
                  fill="#82ca9d"
                  label={({ payload, x, y, value }) => (
                    <text
                      x={x + 30 / 2}
                      y={y}
                      fill="#82ca9d"
                      dy={-6}
                      textAnchor="middle"
                      className="text-xs"
                    >
                      ${value.toLocaleString()}
                    </text>
                  )}
                />
                <Bar
                  dataKey="save"
                  fill="#eda62d"
                  label={({ payload, x, y, value }) => (
                    <text
                      x={x + 30 / 2}
                      y={y}
                      fill="#eda62d"
                      dy={-6}
                      textAnchor="middle"
                      className="text-xs"
                    >
                      ${value.toLocaleString()}
                    </text>
                  )}
                />
              </BarChart> */}
            </ResponsiveContainer>

            {/* <ResponsiveContainer width={"100%"}>
              <BarChart
                data={yearData}
                barCategoryGap={"20%"}
                margin={{ left: -20 }}
              >
                <XAxis dataKey={"name"} tick={{ fontSize: "12px" }} />
                <YAxis
                  tick={{ fontSize: "12px", fontFamily: "Inter" }}
                  tickFormatter={(value) => `$${value / 1000}K`}
                />
                <Tooltip
                  content={({ payload }) => (
                    <div className="p-2 border border-disable bg-secondary rounded-lg text-primary text-xs">
                      <p className="font-bold">Tooltip</p>
                      {payload && payload.length ? (
                        payload.map((entry, index) => (
                          <div key={index} className="">
                            <span>{entry.name}: </span>
                            <span>${entry.value?.toLocaleString()}</span>
                          </div>
                        ))
                      ) : (
                        <div>No data available</div>
                      )}
                    </div>
                  )}
                />

                <Legend
                  wrapperStyle={{
                    fontSize: "12px",
                    fontFamily: "Inter",
                    color: "#333",
                  }}
                />
                <Bar dataKey={"income"} stackId={"a"} fill="#8884d8" />
                <Bar dataKey={"expense"} stackId={"a"} fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer> */}
          </div>
        </Card>

        <Card
          title="Net Income vs Expenses - Yearly"
          className="flex-grow-2 flex-1 text-center"
        >
          <div className="w-full h-60">
            <ResponsiveContainer width={"100%"}>
              <ComposedChart
                data={monthData}
                barCategoryGap={"20%"}
                margin={{ left: -20 }}
              >
                <XAxis dataKey={"month"} tick={{ fontSize: "12px" }} />
                <YAxis
                  tick={{ fontSize: "12px", fontFamily: "Inter" }}
                  tickFormatter={(value) => `$${value / 1000}K`}
                />
                <Tooltip
                  content={({ payload }) => (
                    <div className="p-2 border border-disable bg-secondary rounded-lg text-primary text-xs">
                      {payload && payload.length ? (
                        payload.map((entry, index) => (
                          <div key={index} className="">
                            <span>{entry.name}: </span>
                            <span>${entry.value?.toLocaleString()}</span>
                          </div>
                        ))
                      ) : (
                        <div>No data available</div>
                      )}
                    </div>
                  )}
                />

                <Legend
                  wrapperStyle={{
                    fontSize: "12px",
                    fontFamily: "Inter",
                    color: "#333",
                  }}
                />
                <Bar dataKey={"income"} stackId={"a"} fill="#8884d8" />
                <Bar dataKey={"expense"} stackId={"a"} fill="#82ca9d" />
                <Line type="monotone" dataKey="save" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card
          title="Income vs Expenses"
          className="flex-grow flex-1 text-center"
        >
          Test
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

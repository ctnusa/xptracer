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
  LineChart,
  CartesianGrid,
} from "recharts";

import { CaretUp, LineVertical } from "@phosphor-icons/react";
import Card from "../components/Card";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const YearPage = () => {
  const [monthData, setMonthData] = useState<any>([]);
  const [expenseData, setExpenseData] = useState<any>([]);
  const [incomeData, setIncomeData] = useState<any>([]);
  const [budgetActualData, setBudgetActualData] = useState<any>([]);
  const [investmentData, setInvestmentData] = useState<any>([]);
  const [investmentTrendData, setInvestmentTrendData] = useState<any>([]);

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
    setMonthData(monthData);
    setExpenseData([
      { name: "groceries", value: 7000, color: "#8884d8" }, // Customize color
      { name: "gas", value: 1000, color: "#82ca9d" }, // Customize color
      { name: "insurance", value: 1800, color: "#EDA62D" }, // Customize color
      { name: "rent", value: 4500, color: "#47D1FF" }, // Customize color
    ]);
    setIncomeData([
      { name: "job", value: 85000, color: "#8884d8" }, // Customize color
      { name: "tax return", value: 3700, color: "#82ca9d" }, // Customize color
      { name: "gift", value: 800, color: "#EDA62D" }, // Customize color
      { name: "tutor", value: 4500, color: "#47D1FF" }, // Customize color
    ]);
    setInvestmentData([
      { name: "house", value: 85000, color: "#8884d8" }, // Customize color
      { name: "gold", value: 3700, color: "#82ca9d" }, // Customize color
      { name: "stock", value: 800, color: "#EDA62D" }, // Customize color
      { name: "crypto", value: 4500, color: "#47D1FF" }, // Customize color
    ]);
    setBudgetActualData([
      { name: "groceries", budget: 7000, actual: 5000 }, // Customize color
      { name: "gas", budget: 1000, actual: 1000 }, // Customize color
      { name: "insurance", budget: 1800, actual: 1800 }, // Customize color
      { name: "rent", budget: 4500, actual: 4500 }, // Customize color
      { name: "rent", budget: 3700, actual: 4500 }, // Customize color
      { name: "rent", budget: 2500, actual: 6000 }, // Customize color
    ]);
    setInvestmentTrendData([
      { month: "Jan", house: 4000, stock: 3000, crypto: 1000 },
      { month: "Feb", house: 3000, stock: 2000, crypto: 2000 },
      { month: "Mar", house: 5000, stock: 4500, crypto: 1500 },
      { month: "Apr", house: 7000, stock: 6000, crypto: 2500 },
      { month: "May", house: 6000, stock: 3400, crypto: 1600 },
      { month: "Jun", house: 6000, stock: 4125, crypto: 1875 },
      { month: "Jul", house: 4570, stock: 7000, crypto: 1200 },
      { month: "Aug", house: 9700, stock: 2000, crypto: 7700 },
      { month: "Sep", house: 8430, stock: 6700, crypto: 1730 },
      { month: "Oct", house: 4800, stock: 9800, crypto: 1300 },
      { month: "Nov", house: 7000, stock: 1200, crypto: 5800 },
      { month: "Dec", house: 1000, stock: 1800, crypto: 0 },
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <div className="flex flex-wrap gap-3 w-full">
        <Card title="Year" className="flex-grow flex-1 text-center">
          <select name="" id="" className="text-2xl font-bold">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </Card>
        <Card
          title="Gross Revenue"
          className="flex-grow flex-1 flex flex-col items-center text-center "
        >
          <p className="text-2xl font-bold mb-2">$12,500</p>
          {/* <div className="text-secondary">
            <p className="text-2xl font-bold mb-2">$12,500</p>
            <div className="flex gap-2 text-quinary">
              <CaretUp size={20} weight="fill" className="" />
              <p className="">$12,300</p>
              |
              <CaretUp size={20} weight="fill" className="" />
              <p className="">30%</p>
            </div>
          </div> */}
        </Card>
        <Card title="Net Revenue" className="flex-grow flex-1 text-center">
          <p className="text-2xl font-bold">$7,500</p>
        </Card>
        <Card title="Tax Deductions" className="flex-grow flex-1 text-center">
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
        <Card title="Expenses Breakdown" className="flex-2 text-center">
          <div className="w-full h-50">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  label={({ x, y, value, percent, index }) => {
                    const entry = expenseData[index];
                    return (
                      <text
                        x={x + 10}
                        y={y + 10}
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
                  paddingAngle={5}
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

        <Card title="Income Breakdown" className="flex-2 text-center">
          <div className="w-full h-50">
            <ResponsiveContainer width={"100%"}>
              <PieChart>
                <Pie
                  data={incomeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
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
                  paddingAngle={5}
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
          </div>
        </Card>

        <Card title="Investment Breakdown" className="flex-2 text-center">
          <div className="w-full h-50">
            <ResponsiveContainer width={"100%"}>
              <PieChart>
                <Pie
                  data={investmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
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
                  paddingAngle={5}
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
          </div>
        </Card>

        <Card title="Buying House" className="flex-2 text-center">
          <div className="w-full h-50">
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
                    onClick: () =>
                      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
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
        </Card>
      </div>

      <div className="flex flex-wrap gap-3 grow">
        <Card
          title="Net Income vs Expenses - Yearly"
          className="flex-1 grow-4 shrink-0 text-center"
        >
          <div className="w-full h-80 shrink-0">
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
          title="Planned vs Actual Spending"
          className="flex-1 grow-3 text-center"
        >
          <div className="w-full h-80">
            <ResponsiveContainer width="100%">
              <BarChart
                data={budgetActualData}
                layout="vertical" // This makes the bar chart horizontal
                barGap={6}
                margin={{
                  top: 5,
                  left: -30,
                  bottom: 5,
                }}
              >
                <XAxis
                  type="number"
                  tick={{ fontSize: "12px" }}
                  tickFormatter={(value) =>
                    `$${(value / 1000).toLocaleString()}K`
                  }
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={100}
                  tick={{ fontSize: "12px" }}
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
                <Bar dataKey="budget" fill="#8884d8" barSize={20} />
                <Bar dataKey="actual" fill="#82ca9d" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Investment Trends" className="flex-1 grow-5 text-center">
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={500} height={300} data={investmentTrendData}>
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
                <Line
                  type="monotone"
                  dataKey="house"
                  stroke="#8884d8"
                  dot={{ fill: "#8884d8", r: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#82ca9d"
                  dot={{ fill: "#82ca9d", r: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="crypto"
                  stroke="#ff7300"
                  dot={{ fill: "#ff7300", r: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};


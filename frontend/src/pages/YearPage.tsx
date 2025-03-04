import React, { useEffect, useState } from "react";
import { GaugeComponent } from "react-gauge-component";
import {
  Bar,
  BarChart,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import {
  Card,
  CardContent, CardHeader,
  CardTitle
} from "@/components/ui/card";

export const YearPage = () => {
  const [monthData, setMonthData] = useState<any>([]);
  const [expenseData, setExpenseData] = useState<any>([]);
  const [incomeData, setIncomeData] = useState<any>([]);
  const [budgetActualData, setBudgetActualData] = useState<any>([]);
  const [investmentData, setInvestmentData] = useState<any>([]);
  const [investmentTrendData, setInvestmentTrendData] = useState<any>([]);

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
    <div className="flex flex-col w-full h-screen gap-1.5 p-2">
      <div className="flex flex-wrap gap-1.5 w-full grow-1 basis-0">
        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <select name="" id="" className="text-lg font-bold">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Year</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <p className="text-lg font-bold mb-2">$12,500</p>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Gross Revenue</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <p className="text-lg font-bold">$7,500</p>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Net Revenue</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <p className="text-lg font-bold">$1,500</p>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Tax Deductions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <p className="text-lg font-bold">$2,500</p>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Expenses</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <p className="text-lg font-bold">$5,000</p>
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-50 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Saving</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <div className="flex gap-1 flex-col">
              <div className="flex gap-1 justify-between">
                <p className="text-xs font-bold">Buying House</p>
                <p className="text-xs font-bold">50%</p>
              </div>
              <div className="flex gap-1 justify-between">
                <p className="text-xs font-bold">Buying Car</p>
                <p className="text-xs font-bold">1%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-1.5 grow-3 basis-0">
        <Card className="flex flex-1 text-center rounded-sm min-w-60 min-h-60 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Expenses Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <ResponsiveContainer>
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
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-60 min-h-60 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Income Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <ResponsiveContainer>
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
          </CardContent>
        </Card>

        <Card className="flex flex-1 text-center rounded-sm min-w-60 min-h-60 gap-1 p-4 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm">Investment Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 flex-grow flex-1 items-center text-center">
            <ResponsiveContainer>
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
          </CardContent>
        </Card>

        <Card
          // className="flex-2 text-center rounded-sm"
          className="flex flex-1 text-center rounded-sm min-w-60 min-h-60 gap-1 p-4 shadow-none"
        >
          <CardHeader>
            <CardTitle className="text-sm">Buying House</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-1 justify-center items-center text-center">
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  {
                    limit: 15,
                    color: "#EA4228",
                    showTick: true,
                    tooltip: {
                      text: "Too low temperature!",
                    },
                    onClick: () => {},
                    onMouseMove: () => {},
                    onMouseLeave: () => {},
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
          </CardContent>
        </Card>

        <Card
          title="Planned vs Actual Spending"
          className="flex flex-1 text-center rounded-sm min-w-60 gap-1 p-4 shadow-none"
        >
          <CardHeader>
            <CardTitle className="text-sm">Buying House</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-1 justify-center items-center text-center">
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
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-1.5 grow-3 basis-0">
        <Card
          title="Net Income vs Expenses - Yearly"
          className="flex-1 grow-1 shrink-0 text-center rounded-sm min-w-80 min-h-60 shadow-none"
        >
          <CardHeader>
            <CardTitle className="text-sm">Buying House</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-1 justify-center items-center text-center">
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
          </CardContent>
        </Card>

        <Card
          title="Investment Trends"
          className="flex-1 grow-1 text-center rounded-sm min-w-80 min-h-60 shadow-none"
        >
          <CardHeader>
            <CardTitle className="text-sm">Buying House</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-1 justify-center items-center text-center">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

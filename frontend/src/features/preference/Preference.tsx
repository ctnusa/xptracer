// import { Button, Select, Switch, Label } from '@components/ui';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import {
  themeSelector,
  currencySelector,
  languageSelector,
} from "./prefSelectors";
import { useAppSelector } from "@/app/hooks";
import { useTheme } from "@/hooks/useTheme";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleIcon } from "lucide-react";

type Preferences = {
  theme: string;
  notifications: boolean;
  language: string;
};

export const Preference: React.FC = () => {
  const theme = useAppSelector(themeSelector);
  const currency = useAppSelector(currencySelector);
  const language = useAppSelector(languageSelector);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleRadioChange = (value: string) => {
    // Get value for the custom css variable from the root element
    const fontSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue(value);

    document.documentElement.style.setProperty("font-size", fontSize);
    localStorage.setItem("font-size", value);
  };

  return (
    <div className="flex flex-col gap-2 ">
      {/* Language & Currency */}
      <Card className="max-w-3xl w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Language & Currency</CardTitle>
          <CardDescription>
            Select your preferred language and currency.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-65 flex flex-col gap-2">
          <div className="flex justify-between">
            {/* Label for Language */}
            <div className="flex items-center">
              <Label htmlFor="name" className="text-xs">
                Language
              </Label>
            </div>
            {/* Select for Language */}
            <div className="flex flex-col space-y-1.5 w-30">
              <Select defaultValue={language}>
                <SelectTrigger className="text-xs h-8">
                  <SelectValue placeholder="Select" className="text-xs" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="english" className="text-xs">
                    English
                  </SelectItem>
                  <SelectItem value="vietnamese" className="text-xs">
                    Vietnamese
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between">
            {/* Label for Currency */}
            <div className="flex items-center justify-end">
              <Label htmlFor="name" className="text-xs w-[70px]">
                Currency
              </Label>
            </div>
            {/* Select for Currency */}
            <div className="flex flex-col space-y-1.5 w-30">
              <Select defaultValue={currency}>
                <SelectTrigger className="text-xs h-8">
                  <SelectValue placeholder="Select" className="text-xs" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {Intl.supportedValuesOf("currency").map((currency) => (
                    <SelectItem
                      key={currency}
                      value={currency}
                      className="text-xs"
                    >
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme */}
      <Card className="max-w-3xl w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Select your preferred theme.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-mode"
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
              <Label htmlFor="airplane-mode" className="text-xs">
                Dark Mode
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Font Size */}
      <Card className="max-w-3xl min-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Font Size</CardTitle>
          <CardDescription>Select your preferred font size.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex max-w-xxl">
            <div className="flex items-center justify-end">
              <Label htmlFor="name" className="text-xs w-[70px]">
                Font size
              </Label>
            </div>
            <div className="grow-1">
              <RadioGroup
                defaultValue={
                  localStorage.getItem("font-size") || "--xptracer-font-size-sm"
                }
                onValueChange={handleRadioChange}
                className="flex justify-evenly"
              >
                {[
                  { label: "Extra small", value: "--xptracer-font-size-xs" },
                  { label: "Small", value: "--xptracer-font-size-sm" },
                  { label: "Large", value: "--xptracer-font-size-lg" },
                  { label: "Extra large", value: "--xptracer-font-size-xl" },
                ].map(({ label, value }, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={`r${index}`} />
                    <Label htmlFor={`r${index}`} className="text-xs">
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

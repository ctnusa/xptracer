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
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { themeSelector, currencySelector, languageSelector } from "./prefSelectors";
import { useAppSelector } from "@/app/hooks";
import { useTheme } from "@/hooks/useTheme";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Preferences = {
  theme: string;
  notifications: boolean;
  language: string;
};

export const Preference: React.FC = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    theme: "light",
    notifications: true,
    language: "English",
  });

  const theme = useAppSelector(themeSelector);
  const currency = useAppSelector(currencySelector);
  const language = useAppSelector(languageSelector);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleChange =
    (key: keyof Preferences) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setPreferences({
        ...preferences,
        [key]: value,
      });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit preferences (e.g., send to backend or save in local storage)
    console.log("Preferences saved:", preferences);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <Card className="max-w-3xl w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Language & Region</CardTitle>
          <CardDescription>
            Select your preferred language and region.
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

      <Card className="max-w-3xl min-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Font Size</CardTitle>
          <CardDescription>Select your preferred font size.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex max-w-xxl">
            {/* Label for Currency */}
            <div className="flex items-center justify-end">
              <Label htmlFor="name" className="text-xs w-[70px]">
                Font size
              </Label>
            </div>
            {/* Select for Currency */}
            <div className="grow-1">
              <RadioGroup
                defaultValue="option-one"
                className="flex justify-evenly"
              >
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="text-xs">
                    Extra small
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="text-xs">
                    Small
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="text-xs">
                    Large
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="text-xs">
                    Extra large
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

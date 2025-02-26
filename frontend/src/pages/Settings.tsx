// import { useTheme } from "../hooks/useTheme";
// import { Button } from "@/components/ui/button"

// const Settings = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <div>
//       {isDarkMode && <div className="w-10 h-10 text-white">"DARK MODE"</div>}
//       {!isDarkMode && <div className="w-10 h-10 text-black">"WHITE MODE"</div>}
//       <button className="w-50 h-5 bg-white text-black" onClick={toggleTheme}>Change Theme</button>

//       <Button className="bg-blue-600 text-white">Click me</Button>
//     </div>
//   );
// };

// export { Settings };

import { Preference } from "@/features/preference/Preference";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTheme } from "@/hooks/useTheme";

export const Settings = () => {
  // const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <Tabs defaultValue="billing" className="space-y-4">
        <TabsList className="flex space-x-4 w-full">
          <TabsTrigger value="account" className="text-xs">
            Account
          </TabsTrigger>
          <TabsTrigger value="preferences" className="text-xs">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs">
            Security
          </TabsTrigger>
          <TabsTrigger value="reports" className="text-xs">
            Report & Analytics
          </TabsTrigger>
        </TabsList>

        {/* Billing & Subscription Tab */}
        <TabsContent value="account"></TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          {/* {isDarkMode && (
            <div className="w-10 h-10 text-white">"DARK MODE"</div>
          )}
          {!isDarkMode && (
            <div className="w-10 h-10 text-black">"WHITE MODE"</div>
          )}
          <button
            className="w-50 h-5 bg-white text-black"
            onClick={toggleTheme}
          >
            Change Theme
          </button> */}

          <Preference />
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications"></TabsContent>
      </Tabs>
    </div>
  );
};

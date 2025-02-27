import { Preference } from "@/features/preference/Preference";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserProfile } from "@/features/user/UserProfile";

export const Settings = () => {

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

        {/* Account Tab */}
        <TabsContent value="account">
          <UserProfile />
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Preference />
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications"></TabsContent>
      </Tabs>
    </div>
  );
};

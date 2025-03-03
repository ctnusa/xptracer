import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  selectEmail,
  selectFirstname,
  selectLastname,
  selectUsername,
} from "../user/userSelectors";
import { useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";

export const UserProfile: React.FC = () => {
  const username = useAppSelector(selectUsername);
  const email = useAppSelector(selectEmail);
  const lastname = useAppSelector(selectLastname);
  const firstname = useAppSelector(selectFirstname);

  return (
    <div className="flex flex-col gap-2 ">
      <Card className="max-w-3xl w-2xl mx-auto">
        <CardHeader className="-mb-2">
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="max-w-65 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs">
              First Name
            </Label>

            <Label htmlFor="name" className="text-xs">
              Chi Tam
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs">
              Last Name
            </Label>

            <Label htmlFor="name" className="text-xs">
              Nguyen
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs">
              Email
            </Label>

            <Label htmlFor="name" className="text-xs">
              cnguyen2603@berkeley.edu
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs">
              Phone
            </Label>

            <Label htmlFor="name" className="text-xs">
              (510) 990-1234
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs">
              Bio
            </Label>

            <Label htmlFor="name" className="text-xs">
              Product Designer
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-2xl mx-auto">
        <CardHeader className="-mb-2">
          <CardTitle className="flex justify-between items-center">
            <div>Personal Information</div>
            <Button className="h-6 rounded-sm">Edit</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 max-w-80">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Username
            </Label>
            <Label htmlFor="name" className="text-xs">
              {username}
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              First Name
            </Label>
            <Label htmlFor="name" className="text-xs">
              {firstname}
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Last Name
            </Label>
            <Label htmlFor="name" className="text-xs">
              {lastname}
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Email
            </Label>
            <Label htmlFor="name" className="text-xs">
              {email}
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Phone
            </Label>
            <Label htmlFor="name" className="text-xs">
              (510) 990-1234
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-3xl min-w-2xl mx-auto">
        <CardHeader className="-mb-2">
        <CardTitle className="flex justify-between items-center">
            <div>Address</div>
            <Button className="h-6 rounded-sm">Edit</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-80 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Street
            </Label>
            <Label htmlFor="name" className="text-xs">
              1975 Brantley Drive
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Country
            </Label>
            <Label htmlFor="name" className="text-xs">
              United States of America
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              City
            </Label>
            <Label htmlFor="name" className="text-xs">
              San Jose
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              State
            </Label>
            <Label htmlFor="name" className="text-xs">
              California
            </Label>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-xs font-bold">
              Postal Code
            </Label>
            <Label htmlFor="name" className="text-xs">
              95131
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

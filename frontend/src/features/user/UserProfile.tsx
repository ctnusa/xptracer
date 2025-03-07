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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const UserProfile: React.FC = () => {
  const username = useAppSelector(selectUsername);
  const email = useAppSelector(selectEmail);
  const lastname = useAppSelector(selectLastname);
  const firstname = useAppSelector(selectFirstname);

  return (
    <div className="flex flex-col gap-2 ">
      <Card className="max-w-3xl w-2xl mx-auto rounded-sm shadow-none">
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

      <Card className="max-w-3xl w-2xl mx-auto rounded-sm shadow-none">
        <CardHeader className="-mb-2">
          <CardTitle className="flex justify-between items-center">
            <div>Personal Information</div>
            {/* <Button className="h-6 rounded-sm">Edit</Button> */}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-foreground text-background h-7">Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
                <DialogHeader>
                  <DialogTitle className="text-sm">
                    Edit Personal Information
                  </DialogTitle>
                  <DialogDescription className="text-xs">
                    Make changes to your personal here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-xs">
                      Username
                    </Label>
                    <Input
                      id="name"
                      value={username}
                      className="col-span-3 !text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right text-xs">
                      First Name
                    </Label>
                    <Input
                      id="username"
                      value={firstname}
                      className="col-span-3 !text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right text-xs">
                      Last Name
                    </Label>
                    <Input
                      id="username"
                      value={lastname}
                      className="col-span-3 !text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right text-xs">
                      Email
                    </Label>
                    <Input
                      id="username"
                      value={email}
                      className="col-span-3 !text-xs"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className=" text-xs">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
    </div>
  );
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealershipHoursForm from "./components/DealershipHoursForm";
import UserManagement from "./components/UserManagement";

export const dynamic = 'force-dynamic';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-2">Manage dealership configuration and users</p>
      </div>

      <Tabs defaultValue="hours" className="w-full">
        <TabsList>
          <TabsTrigger value="hours">Dealership Hours</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>

        <TabsContent value="hours" className="mt-6">
          <DealershipHoursForm />
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <UserManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { notFound } from "next/navigation";
import { getAdmin } from "@/app/actions/admin";
import Sidebar from "../components/Sidebar";
import Header from "@/components/Header.jsx";
export default async function AdminLayout({ children }) {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <Header isAdminPage={true} />
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 md:pl-56 pt-[80px] h-full">{children}</main>
      </div>
    </div>
  );
}

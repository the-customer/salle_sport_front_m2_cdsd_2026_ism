import NavBar from "../../components/base/NavBar";
import SideBar from "../../components/base/SideBar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar/>
      <div className="flex-1 flex flex-col">
        <NavBar/>
        <div>DashboardPage</div>
      </div>
    </div>
  )
}

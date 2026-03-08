import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";


function AppContent(){
  //...
  return <AppRoutes/>
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  )
}

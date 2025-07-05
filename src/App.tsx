import Home from "./pages/Home"
import { ThemeProvider } from "./components/ui/theme-provider"
import AnalyzeAddress from "./pages/AnalyzeAdress"
import AnalyzeSmartContract from "./pages/AnalyzeSmartContract"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./constants/routes"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ANALYZE_ADDRESS} element={<AnalyzeAddress />} />
        <Route path={ROUTES.ANALYZE_SMART_CONTRACT} element={<AnalyzeSmartContract />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
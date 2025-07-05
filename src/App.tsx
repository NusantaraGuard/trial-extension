import Home from "./pages/Home"
import { ThemeProvider } from "./components/ui/theme-provider"
import AnalyzeAddress from "./pages/AnalyzeAdress"
import AnalyzeSmartContract from "./pages/AnalyzeSmartContract"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnalyzeSmartContract />
      <Home />
      <AnalyzeAddress />
      {/* Add more pages as needed */}
    </ThemeProvider>
  )
}

export default App
import Home from "./pages/Home"
import { ThemeProvider } from "./components/ui/theme-provider"
import AnalyzeAddress from "./pages/AnalyzeAdress"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <AnalyzeAddress />
    </ThemeProvider>
  )
}

export default App
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { ThemeProvider } from "./components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="w-[360px] p-4 space-y-4 text-left bg-black rounded-xl text-white shadow-md">
      <div className="flex flex-row">
        <div className="basis-64">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="basis-64">
          <h1 className="text-2xl font-bold">Neu's Wallet</h1>
          <p className="text-sm text-gray-400">Au.</p>
        </div>
        <div className="basis-64">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
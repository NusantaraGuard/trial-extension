import { Copy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { ThemeProvider } from "./components/ui/theme-provider"

function App() {

  const address = "0x1234567890abcdef1234567890abcdef12345678"

  const truncateAddress = address.length > 4
    ? `${address.substring(0, 2)}..${address.substring(address.length - 2)}`
    : address;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="w-[360px] p-4 space-y-4 bg-[#25262B] text-white shadow-md">
      <div className="flex flex-row justify-between items-center bg-[#1C1D22]">
        <div className="basis-64">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" className="w-44 h-44"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="basis-64 flex flex-col items-center justify-center">
          <h1 className="text-[14px] font-bold">Neu's Wall</h1>
          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm text-[#777777]">{truncateAddress}</p>
            <Copy className="w-[14px] h-[14px] text-[#777777]"/>
          </div>
        </div>
        <div className="basis-64 flex justify-end">
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
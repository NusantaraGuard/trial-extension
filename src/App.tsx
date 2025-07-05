import { ChevronLeftIcon, ChevronRightIcon, Copy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { ThemeProvider } from "./components/ui/theme-provider"
import { useState } from "react";
import cryptoCards from "./interfaces/carousel";
import topBarImage from "./assets/Illus.svg"

function App() {
  const address = "0x1234567890abcdef1234567890abcdef12345678"
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cryptoCards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === cryptoCards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const currentCard = cryptoCards[currentIndex];
  const priceChangeColor = currentCard.change >= 0 ? 'text-green-500' : 'text-red-500';
  const priceChangeIcon = currentCard.change >= 0 ? '+' : '';

  const truncateAddress = address.length > 4
    ? `${address.substring(0, 2)}..${address.substring(address.length - 2)}`
    : address;


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="w-[375px] h-[570px] p-4 space-y-4 bg-[#25262B] text-white general-sans shadow-md">

      { /* Header Sections */}
      <div className="flex flex-row justify-between items-center bg-[#1C1D22]">
        <div className="basis-64">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" className="w-44 h-44"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="basis-64 flex flex-col items-center justify-center">
          <h1 className="text-[14px] font-medium">Neu's Wall</h1>
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

      { /* Carousel Section */}
      <div className="bg-[#1F2128] flex items-center justify-center">
        <div className="w-full h-[194px]">
          <div className="bg-[#1e1e1e] overflow-hidden transition-all duration-500">
            <div className="h-48 w-full overflow-hidden">

              <img 
                src={topBarImage}
                alt={currentCard.name}
                />

              <div className="p-6 relative -mt-10">
                <div className="flex justify-center">
                  <div className="w-16 pt-4 flex items-center justify-center">
                    <currentCard.icon className="w-8 h-8 border-4 rounded-full bg-[#627EEA33]"/>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between mt-4">
                  <button onClick={prevSlide} className="p-3 rounded-full bg-[#333333] text-gray-400 hover:bg-[#444444] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1e1e1e] focus:ring-blue-500">
                    <ChevronLeftIcon />
                  </button>

                  <div className="text-center">
                    <p className="text-[32px] font-bold text-white">
                      ${currentCard.price.toLocaleString('en-US', {minimumFractionDigits: 2})}
                    </p>
                    <p className={`text-[16px] font-medium ${priceChangeColor}`}>
                      {priceChangeIcon}{currentCard.change.toFixed(2)}%
                    </p>
                  </div>

                  <button onClick={nextSlide} className="p-3 rounded-full bg-[#333333] text-gray-400 hover:bg-[#444444] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1e1e1e] focus:ring-blue-500">
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
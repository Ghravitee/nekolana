import React from "react";

const Info = () => {
  const timelineData = [
    {
      title: "GET A WALLET",
      description: "Download your wallet of choice (Phantom, Solflare...)",
      list: 1,
    },
    {
      title: "GET SOME SOL",
      description: "Buy some SOL from an exchange (Binance, Bybit...)",
      list: 2,
    },
    {
      title: "GO TO RAYDIUM OR JUPITER",
      description: "Click BUY NOW, link your wallet to start swapping",
      list: 3,
    },
    {
      title: "SELECT AN AMOUNT",
      description: "Select the amount of $Neko you want to buy and swap!",
      list: 4,
    },
  ];

  return (
    <div className="text-black">
      <h2 className="text-4xl md:text-5xl text-center mb-6 londrina font-bold">HOW TO BUY</h2>
      <h3 className="text-3xl protest text-center mb-6">
        Follow these steps to buy $Neko and join our holders!
      </h3>

      {/* Vertical Timeline */}
      <div className="md:hidden max-w-4xl mx-auto p-4 flex flex-col justify-center items-center">
        <div className="relative border-l-2 border-gray-200">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="flex justify-center items-center absolute w-8 h-8 bg-black rounded-full mt-1.5 -left-4 border-2 border-white">
                <p className="text-xs font-semibold text-white londrina">
                  {item.list}
                </p>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold londrina">{item.title}</h3>
                <p className="mb-4 text-xl font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div class="hidden max-w-7xl mx-auto w-full md:grid grid-cols-9 px-2 text-black">
      {/* Stack 1 */}
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:pl-4">
                <h1 class="text-3xl font-semibold py-2 londrina">GET A WALLET</h1>
                <p class="text-2xl">Download your wallet of choice (Phantom, Solflare...)</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white protest text-center">1</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>


        {/* Stack 2 */}
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white protest text-center">2</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:pl-4">
                <h1 class="text-3xl font-semibold py-2 londrina">GET SOME SOL</h1>
                <p class="text-2xl protest">Buy some SOL from an exchange (Binance, Bybit...)</p>
            </div>
        </div>

        {/* Stack 3 */}
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:pl-4">
                <h1 class="text-3xl font-semibold py-2 londrina">GO TO RAYDIUM OR JUPITER</h1>
                <p class="text-2xl protest">Click BUY NOW, link your wallet to start swapping</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white protest text-center">3</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>


     {/* Stack 4 */}
     <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white protest text-center">4</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:pl-4">
                <h1 class="text-3xl font-semibold py-2 londrina">SELECT AN AMOUNT</h1>
                <p class="text-2xl protest">Select the amount of $Neko you want to buy and swap!</p>
            </div>
        </div>
       
    </div>

    </div>
  );
};

export default Info;

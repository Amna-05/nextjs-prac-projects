'use client'
import React, { useState,useId } from 'react'
import useCurrencyInfo from '../hooks/Hooks'
import InputBox from '../Components/InputBox'
function Converter() {
    
    const  [To, setTo] = useState('pkr')
    const [amount,setamount] =useState(0)
    const[From ,setFrom] = useState('usd')
    const[convertedAmount ,setconvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(From)
   console.log("Currency Info:", currencyInfo);

  let options = [];
  if (currencyInfo) {
    console.log('Currency Options:', options);

    options = Object.keys(currencyInfo); 
    console.log('Currency Options:', options); // Fetch the currency keys only if data exists
  }
  

  const convert = () => {
    if (currencyInfo && currencyInfo[To]) {
      setconvertedAmount(amount * currencyInfo[To]);
    }
  };
 
  const swap = () => {
    const temp = From;
    setFrom(To);
    setTo(temp);
    setamount(convertedAmount);
    setconvertedAmount(amount);
  };

  

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${'https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg'}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>(setamount(amount))}
                                onCurrencychange={(currency)=>(setFrom(currency))}
                                currencyOptions={options}
                                selectCurrency ={From}
                                
                            />  
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onCurrencyChange={(currency) => setTo(currency)}
                                currencyOptions={options}
                                selectCurrency ={To}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {From.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Converter
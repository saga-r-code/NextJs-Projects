"use client"
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";

const page = () => {
    const [handleOutput, setHandleOutput] = useState("")
    const handleCaluclate = (e) => {
        e.preventDefault();
        // Using eval() to evaluate the expression in the input field
        // and update the output field with the result
        setHandleOutput(eval(handleOutput))
    };
  return (
    <>
      <Navbar />
      <div className="layout-style bg-gradient-to-r from-slate-600 to-slate-800 p-4">
        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="text-4xl text-center sm:text-5xl font-bold tracking-wide text-white">
            Simple Calculator{" "}
          </h1>
          <div className="bg-[#384353] shadow-lg shadow-black border border-slate-500 w-auto p-8 rounded-2xl flex justify-center gap-10 flex-col">
            <div>
              <input
                type="text"
                value={handleOutput}
                onChange={(e) => setHandleOutput(e.target.value)}
                placeholder="0"
                readOnly
                className="w-full outline-none hover:scale-105 transition-all duration-300 bg-[#2a313b] text-right p-3 sm:p-5 pt-16 sm:pt-20 shadow-inner shadow-black text-white text-2xl  rounded-xl"
              />
            </div>
            <form onSubmit={handleCaluclate} className="calculator grid grid-cols-4 gap-4 text-sm text-left sm:gap-8 text-white sm:text-lg transition-shadow duration-500">
              <input  value="AC" type="button" className="text-cyan-400" onClick={() => setHandleOutput('')} />
              <input value="DE" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput.slice(0,-1))}/>
              <input value="%" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '%')} />

              <input value="/" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '/')}/>
                
              <input value="7" type="button" onClick={() => setHandleOutput(handleOutput + '7')}/>
              <input value="8" type="button" onClick={() => setHandleOutput(handleOutput + '8')}/>
              <input value="9" type="button" onClick={() => setHandleOutput(handleOutput + '9')}/>
              <input value="*" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '*')}/>

              <input value="4" type="button" onClick={() => setHandleOutput(handleOutput + '4')}/>
              <input value="5" type="button" onClick={() => setHandleOutput(handleOutput + '5')}/>
              <input value="6" type="button" onClick={() => setHandleOutput(handleOutput + '6')}/>
              <input value="-" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '-')}/>
                
              <input value="1" type="button" onClick={() => setHandleOutput(handleOutput + '1')}/>
              <input value="2" type="button" onClick={() => setHandleOutput(handleOutput + '2')}/>
              <input value="3" type="button" onClick={() => setHandleOutput(handleOutput + '3')}/>
              <input value="+" type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '+')}/>
              

              <input value="00" type="button" onClick={() => setHandleOutput(handleOutput + '00')}/>
              <input value="0" type="button" onClick={() => setHandleOutput(handleOutput + '0')}/>
              <input value="." type="button" className="text-cyan-400" onClick={() => setHandleOutput(handleOutput + '.')}/>              
              
              <button
                type="submit"
                className="total text-cyan-400"
              >
                =
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;


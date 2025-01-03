"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const PasswordGenerator = () => {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [charSets, setCharSets] = useState({
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./";

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

  const generatePassword = () => {
    let allChar = "";
    if (charSets.upperCase) allChar += upperCase;
    if (charSets.lowerCase) allChar += lowerCase;
    if (charSets.number) allChar += number;
    if (charSets.specialChar) allChar += specialChar;

    if (allChar === "") {
      alert("Please select at least one character set");
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }
    setPassword(password);
  };

  const handleChangeCondition = (e) => {
    const { name, checked } = e.target;
    setCharSets(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const copyHandler = () => {
    if (Password) {
      navigator.clipboard.writeText(Password);
      alert("Password Copied");
    }
  };

  return (
    <>
      <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-6">
        <div className="max-w-4xl mx-auto pt-10">
          <h1 className="text-5xl mb-12 text-center font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
          Password Generator
          </h1>
          <form
          className="flex justify-center items-center flex-col gap-8"
          onSubmit={(e) => e.preventDefault()}
          >
          <div className="relative w-full max-w-xl">
            <input
            type="text"
            name="passwordGenerated"
            placeholder="Your generated password will appear here"
            readOnly
            value={Password}
            className="w-full outline-none placeholder:text-base tracking-wide text-white placeholder:text-gray-400 bg-gray-800/50 backdrop-blur-xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-colors duration-300 font-medium rounded-xl px-6 py-4 text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <MdContentCopy
              onClick={copyHandler}
              className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            />
            </div>
          </div>

          <div className="w-full max-w-xl bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-700 p-8 shadow-2xl">
            <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
              <p className="text-lg text-gray-300">Password Length</p>
              <p className="text-2xl font-semibold text-purple-400">{length}</p>
              </div>
              <input
              type="range"
              name="length"
              onChange={handleChangeLength}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              min={8}
              max={15}
              value={length}
              />
            </div>

            <div className="space-y-4">
              {[
              { name: "upperCase", label: "Include Uppercase Letters" },
              { name: "lowerCase", label: "Include Lowercase Letters" },
              { name: "number", label: "Include Numbers" },
              { name: "specialChar", label: "Include Special Characters" }
              ].map((option) => (
              <label key={option.name} className="flex items-center space-x-4 cursor-pointer group">
                <input
                type="checkbox"
                name={option.name}
                checked={charSets[option.name]}
                onChange={handleChangeCondition}
                className="w-5 h-5 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-800"
                />
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                {option.label}
                </span>
              </label>
              ))}
            </div>

            <button
              onClick={generatePassword}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg py-3 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Generate Password
            </button>
            </div>
          </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;

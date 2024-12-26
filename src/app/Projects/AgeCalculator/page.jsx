"use client";
import Navbar from "@/app/components/Navbar";
import React, { useEffect, useState } from "react";

const AgeCalculator = () => {
  const [userInput, setUserInput] = useState("");
  const [isShown, setisShown] = useState(false)
  const [todayDate, setTodayDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [ageDetails, setAgeDetails] = useState({
    years: "",
    months: "",
    days: "",
  });

  useEffect(() => {
    const dob = new Date(userInput);
    if (dob.toString() !== "Invalid Date") {
      // Set date of birth
      setDateOfBirth({
        day: dob.getDate(),
        month: dob.getMonth() + 1,
        year: dob.getFullYear(),
      });
    }
    // Set today's date
    const today = new Date();
    setTodayDate({
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    });
  }, [userInput]);

  // Calculate age
  const calculateAge = (e) => {
    setisShown(true)
    e.preventDefault();

    const today = new Date();
    const dob = new Date(userInput);

    const yearDiff = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

   // Calculate years
    // 1. If today's month is smaller than birthday's month, subtract 1 from year difference
    // 2. If today's month is same as birthday's month, check if today's date is smaller than birthday's date
    //    If yes, subtract 1 from year difference
    const age = yearDiff - (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? 1 : 0);

    // Calculate months
    // 1. Multiply year difference with 12 to convert it to months
    // 2. Add today's month to it
    // 3. Subtract birthday's month from it
    // 4. Add 1 to it if today's date is greater than or equal to birthday's date
    //    This is because we want to count the month in which birthday occurs
    // 5. Take modulus of 12 to get the remaining months
    const months = (yearDiff * 12 + today.getMonth() - dob.getMonth() + (today.getDate() >= dob.getDate() ? 0 : -1)) % 12;

    // Calculate days
    // 1. Subtract birthday's date from today's date
    // 2. Add 30 to it if months is negative (i.e. birthday month is greater than today's month)
    //    This is because we want to count the days from the start of the month
    const days = today.getDate() - dob.getDate() + (months < 0 ? -30 : 0);


    setAgeDetails({
      years: age,
      months: months < 0 ? 11 : months,
      days: days < 0 ? 30 + days : days,
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-violet-600 via-indigo-500 to-purple-700 p-4">
        <div className="w-full max-w-lg mx-auto backdrop-blur-xl bg-white/10 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 transform transition-all duration-500 hover:shadow-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-5">
              <h1 className="text-5xl py-3  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-100 tracking-tight">
                Age Calculator
              </h1>
              <p className="text-gray-200 text-lg font-medium opacity-90">
                ✨ Discover your journey through time
              </p>
            </div>

            <form className="space-y-6">
              <div className="relative group">
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-transparent transition-all duration-300 hover:bg-white/10 text-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <button
                type="submit"
                onClick={calculateAge}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl font-semibold transform transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Calculate Age</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm">Date of Birth</p>
                  <p className={`text-white  sm:text-xl font-semibold  ${isShown ? "block" : "hidden"}`}>
                    {dateOfBirth.day}/{dateOfBirth.month}/{dateOfBirth.year}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm">Today's Date</p>
                  <p className="text-white  sm:text-xl font-semibold">
                    {todayDate.day}/{todayDate.month}/{todayDate.year}
                  </p>
                </div>
              </div>
            </div>

            {isShown && ageDetails.months !== todayDate.month&& ageDetails.days !== todayDate.day && ageDetails.years !== todayDate.year && (
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-white/20 transform transition-all duration-500 animate-fadeIn">
               { 
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">{ageDetails.years}</p>
                    <p className="text-gray-300 text-sm">Years</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">{ageDetails.months}</p>
                    <p className="text-gray-300 text-sm">Months</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">{ageDetails.days}</p>
                    <p className="text-gray-300 text-sm">Days</p>
                  </div>
                </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeCalculator;



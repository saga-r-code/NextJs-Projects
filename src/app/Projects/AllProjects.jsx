import React from 'react'
import QuizApp from './QuizApp/page'
import AgeCalculator from './AgeCalculator/page'
import Navbar from '../components/Navbar'
import WheatherApp from './WheatherApp/page'
import Calculator from './Calculator/page'
import PasswordGenerator from './PasswordGenerator/page'
import TicTacToe from './TicTacToe/page'

const AllProjects = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <QuizApp />
      <AgeCalculator />
      <WheatherApp  />
      <Calculator />
      <PasswordGenerator />
      <TicTacToe />
    </main>
  )
}

export default AllProjects

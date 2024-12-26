import React from 'react'
import QuizApp from './QuizApp/page'
import AgeCalculator from './AgeCalculator/page'
import Navbar from '../components/Navbar'

const AllProjects = () => {
  return (
    <div>
      <Navbar />
      <AgeCalculator />
      <QuizApp />
    </div>
  )
}

export default AllProjects

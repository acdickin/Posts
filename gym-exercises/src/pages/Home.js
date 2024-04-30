import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const [exercies,setExercies] =useState('all')
  const [bodyPart,setBodyPart] =useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        setExercies={setExercies} 
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercies={setExercies} 
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home

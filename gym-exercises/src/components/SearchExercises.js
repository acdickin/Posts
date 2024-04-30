import React, { useEffect, useState } from 'react'
import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercises = ({setExercies, bodyPart, setBodyPart}) => {
  const [search,setSearch] =useState('')
  
  const [bodyPart,setBodyParts]= useState([])
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    }
    setBodyParts([all,...bodyPartData])
  },[])
  const handleSearch = async () =>{
    if(search){
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
      const searchedExtercises = exercisesData.filter(exercise=>{ 
        exervise.name.toLowerCase().includes(search)
        || exervise.target.toLowerCase().includes(search)
        || exervise.equipment.toLowerCase().includes(search)
        || exervise.bodyPart.toLowerCase().includes(search)
      });
      setSearch('')
      setExercies(searchedExtercises);
    }
  }
  
  return (
    <Stack alignItem="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize:{lg: '44px', sm:'30px'}
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercises <br/> you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:{
              fontWeight:"700",
              border:"none",
              borderRadius:"6px"
            },
            width:{
              lg:'800px',
              xs:'350px'
            },
            backgroundColor:'#fff'
          }}
          height="76px"
          value="search"
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          className="searchBtn"
          sx={{
            bgcolor:{red},
            color:'#fff',
            textTransform:'none',
            width:{
              lg:'175px',
              sm:'80px'
            },
            fontSize:{
              lg:'20px',
              sm:'14px'
            },
            height:'56px',
            position:'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
      <Box 
        sx={{
          position:'relative',
          width:'100%',
          p:'20px'
        }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      </Box>
    </Stack>
  )
}

export default SearchExercises

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercise/Exercises';
import SearchExercises from '../components/Exercise/SearchExercises';
import HeroBanner from '../components/Exercise/HeroBanner';
 
export default function Homes(){ 
const [bodyPart, setBodyPart] = useState('all');

const [exercises, setExercises] = useState([]);


return( 
<Box>
<HeroBanner/>
<SearchExercises    
setExercises={setExercises}
bodyPart={bodyPart}
setBodyPart={setBodyPart}
/>
<Exercises
setExercises={setExercises}
exercises={exercises}
bodyPart={bodyPart}
/>



</Box>

)


}
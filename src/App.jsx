import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selections from './components/Selections/Selections'
import { useEffect, useState } from 'react';

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(()=> {
    const url = 'course-details.json';
    fetch(url)
    .then(response => response.json())
    .then(data=> setCourses(data))
  }, [])


  return (
    <div className='max-w-[1440px]'>
        <Header></Header>
        <main className='flex justify-between'>
          <Courses courses={courses}></Courses>
          <Selections></Selections>
        </main>


    </div>
       

  )
}

export default App

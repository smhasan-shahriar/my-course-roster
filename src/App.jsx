import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selections from './components/Selections/Selections'
import { useEffect, useState } from 'react';

function App() {

  const [courses, setCourses] = useState([]);
  const [selects, setSelects] = useState([]);
  const [cost, setCost] = useState([0]);

  useEffect(()=> {
    const url = 'course-details.json';
    fetch(url)
    .then(response => response.json())
    .then(data=> setCourses(data))
  }, [])


  const handleSelect = course => {
    const newSelects = [...selects];
    let price = course.price; 
    newSelects.map(select => price += select.price);
    if(newSelects.includes(course)){
      return;
    }
    else{
      newSelects.push(course);
      setCost(price);
    }
    
    setSelects(newSelects);
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
        <Header></Header>
        <main className='flex justify-between'>
          <Courses courses={courses} handleSelect= {handleSelect}></Courses>
          <Selections selects={selects} cost={cost}></Selections>
        </main>


    </div>
       

  )
}

export default App

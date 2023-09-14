import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selections from './components/Selections/Selections'
import { useEffect, useState } from 'react';

function App() {

  const [courses, setCourses] = useState([]);
  const [selects, setSelects] = useState([]);
  const [cost, setCost] = useState(0);
  const [hours, setHours] = useState(0);
  const [remaining, setRemaining] = useState(20);

  useEffect(()=> {
    const url = 'course-details.json';
    fetch(url)
    .then(response => response.json())
    .then(data=> setCourses(data))
  }, [])


  const handleSelect = course => {
    const newSelects = [...selects];
    let price = course.price; 
    let creditHour = course.credit; 
    newSelects.map(course => creditHour += course.credit );
    newSelects.map(select => price += select.price);
    if(newSelects.includes(course)){
      alert('Same subjects cannot be added twice')
      return;
    }
    if(creditHour > 20){
      alert('credit hour exceeded')
    }
    let remainingHour = 20 - course.credit;
    newSelects.map(course => remainingHour -= course.credit);
    if(remainingHour < 0){
      alert('no remaining hour');
    }
    if(creditHour <=20 && remainingHour >=0 && !newSelects.includes(course)){
      newSelects.push(course);
      setSelects(newSelects);
      setCost(price);
      setHours(creditHour);
      setRemaining(remainingHour);
    }
    
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
        <Header></Header>
        <main className='flex flex-col-reverse lg:flex-row justify-between'>
          <Courses courses={courses} handleSelect= {handleSelect}></Courses>
          <Selections selects={selects} cost={cost} hours={hours} remaining={remaining}></Selections>
        </main>


    </div>
       

  )
}

export default App

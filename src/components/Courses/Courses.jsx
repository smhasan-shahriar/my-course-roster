import PropType from 'prop-types'

import Course from "../Course/Course";


const Courses = ({courses, handleSelect}) => {
    return (
        <div className="lg:w-3/4 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 justify-items-center"> 
            {
                courses.map(course => <Course key={course.id} course={course} handleSelect={handleSelect}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropType.array,
    handleSelect: PropType.func
}

export default Courses;
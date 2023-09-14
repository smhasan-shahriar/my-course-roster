import PropType from 'prop-types'

import Course from "../Course/Course";


const Courses = ({courses}) => {
    return (
        <div className="w-3/4 lg: ml-[60px] grid lg:grid-cols-3"> 
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropType.array
}

export default Courses;
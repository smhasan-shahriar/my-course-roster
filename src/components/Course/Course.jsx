import PropType from 'prop-types'


const Course = ({course}) => {
    const {id, title, description, price, credit, img} = course;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

Course.propTypes = {
    course: PropType.object
}

export default Course;
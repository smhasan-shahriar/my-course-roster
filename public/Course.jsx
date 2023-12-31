import PropType from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Course = ({course, handleSelect}) => {
    const {title, description, price, credit, img} = course;
    return (
        <div className='p-4 bg-white w-[312px] h-[402px] rounded-xl'>
            <img className='mb-4 w-[280px] h-[144px]' src={img} alt="" />
            <h3 className='text-lg font-semibold mb-3'>{title}</h3>
            <p className='text-sm opacity-60 mb-5'>{description}</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img src="" alt="" /><p className='opacity-60 font-medium'>Price: {price}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="" alt="" /><p className='opacity-60 font-medium'>Credit: {credit}hr</p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleSelect(course)} className='bg-[#2F80ED] text-white text-lg font-semibold w-[280px] h-[40px] rounded-lg mt-6'>Select</button>
                <ToastContainer />
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropType.object,
    handleSelect: PropType.func
}

export default Course;
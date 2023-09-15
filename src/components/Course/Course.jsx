import PropType from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Course = ({course, handleSelect}) => {
    const {title, description, price, credit, img} = course;
    return (
        <div className='p-4 bg-white w-[312px] rounded-xl lg:max-xl:w-[24.2vw]'>
            <img className='mb-4 w-[280px] lg:max-xl:w-[22vw] object-cover' src={img} alt="" />
            <h3 className='text-lg font-semibold mb-3 lg:max-xl:h-[50px]'>{title}</h3>
            <p className='text-sm opacity-60 mb-5  gap-3 lg:max-xl:h-[80px]'>{description}</p>
            <div className='flex justify-between lg:max-xl:text-sm'>
                <div className='flex items-center gap-3 lg:max-xl:gap-1'>
                    <img src="dollar-sign.svg" alt="" /><p className='opacity-60 font-medium'>Price: {price}</p>
                </div>
                <div className='flex items-center gap-3 lg:max-xl:gap-0'>
                    <img src="book-frame.png" alt="" /><p className='opacity-60 font-medium'>Credit: {credit}hr</p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleSelect(course)} className='bg-[#2F80ED] text-white text-lg font-semibold w-[280px] h-[40px] lg:max-xl:w-[22vw] rounded-lg mt-6'>Select</button>
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
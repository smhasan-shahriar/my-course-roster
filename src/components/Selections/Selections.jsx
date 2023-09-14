import { list } from 'postcss';
import PropType from 'prop-types'

const Selections = ({selects, cost}) => {
    return (
        
        <div className="ml-6 w-1/4 h-full bg-white rounded-xl p-6">
            <h2 className='text-[#2F80ED] text-lg font-bold mb-4'>Credit Hour Remaining: </h2>
            <hr />
            <h2 className='mt-4 mb-5 text-xl font-bold'>Course Name</h2>
            <ol className='mb-6'>
                {
                    selects.map((select, index) => <li key={index}>{index+1} {select.title}</li>)
                }
            </ol>
            <hr />
            <h4 className='my-4'>Total Credit Hour: </h4>
            <hr />
            <h3 className='mt-4 mb-6'>Total Price: {cost} USD</h3>
        </div>
    );
};

Selections.propTypes = {
    selects: PropType.array
}

export default Selections;
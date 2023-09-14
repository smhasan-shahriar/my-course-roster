import PropType from 'prop-types'

const Selections = ({selects, cost, hours, remaining}) => {
    return (
        
        <div className="lg:ml-6 mx-auto md:w-1/2 lg:w-1/4 h-full bg-white rounded-xl p-6 mb-10">
            <h2 className='text-[#2F80ED] text-lg font-bold mb-4'>Credit Hour Remaining: {remaining} hrs</h2>
            <hr />
            <h2 className='mt-4 mb-5 text-xl font-bold'>Course Name</h2>
            <ol className='mb-6'>
                {
                    selects.map((select, index) => <li key={index}>{index+1} {select.title}</li>)
                }
            </ol>
            <hr />
            <h4 className='my-4 opacity-80 font-medium'>Total Credit Hour: {hours} hrs</h4>
            <hr />
            <h3 className='mt-4 mb-6 opacity-80 font-semibold'>Total Price: {cost} USD</h3>
        </div>
    );
};

Selections.propTypes = {
    selects: PropType.array
}

export default Selections;
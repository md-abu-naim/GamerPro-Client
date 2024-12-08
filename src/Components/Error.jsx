import img from '../assets/404/404.gif'

const Error = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center p-10'>
                <h1 className='font-bold text-6xl'>THIS PAGE IS NOT FOUND</h1>

            </div>

            <div className='flex justify-center items-center border W-[800px] h-[500px] p-9'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Error;
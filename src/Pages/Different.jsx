import diff1 from '../assets/assets/home/featured.jpg'
import Heading from '../Shared/Heading';
const Different = () => {
    return (
        <div className='bg-fixed' style={{backgroundImage:`url(${diff1})`, backgroundSize:"cover"}}>
           <div className='bg-black bg-opacity-40'>
           <Heading subHeading="Check it out" Heading="FROM OUR MENU"></Heading>
        <div className='flex flex-col w-10/12 mx-auto lg:flex-row justify-center items-center gap-6 pb-28'>
            <img className='w-4/12  rounded-lg' src={diff1} alt="" />
        <div>
            <h1 className='text-2xl text-white font-bold'>January 03 2027</h1>
            <p className='text-xl text-white font-bold'>WHERE I CAN GET SOME ?</p>
            <p className='text-xs text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse animi debitis deleniti laboriosam iusto enim dolorum quod expedita ab quis unde voluptatem quibusdam alias sunt odio, nostrum architecto amet.</p>
        </div>
        </div>
           </div>
        </div>
    );
};

export default Different;
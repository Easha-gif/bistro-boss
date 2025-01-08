/* eslint-disable react/prop-types */


const Cover = ({title,description}) => {
    return (
        <div  className="bg-black bg-opacity-50 rounded-md w-8/12 mx-auto text-center py-20">
            <div><h1 className="text-5xl text-white font-bold mb-3">{title}</h1>
            <p className="text-gray-100 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Cover;
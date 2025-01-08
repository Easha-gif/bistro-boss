/* eslint-disable react/prop-types */

const Heading = ({Heading ,subHeading}) => {
    return (
        <div className="text-center py-16">
            <p className="text-yellow-600 font-semibold text-base mb-3">----{subHeading}----</p>
        <h1 className="text-3xl text-black border-b-4 border-t-4 lg:w-4/12 mx-auto py-4 font-semibold">{Heading}</h1>
        </div>
    );
};

export default Heading;
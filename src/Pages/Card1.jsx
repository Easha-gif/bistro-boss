/* eslint-disable react/prop-types */


const Card1 = ({item}) => {
    return (
        <div>
            <div className="flex items-center gap-4 p-3 bg-white shadow-md border-2 rounded-lg">
           <img style={{borderRadius:"0px 300px 150px 300px"}} className="w-20 object-cover" src={item.image} alt="" />
           <div>
            <h1 className="text-xl font-semibold text-gray-800">{item.name}--------</h1>
            <p className="text-sm text-gray-600">{item.recipe}</p>
           </div>
           <div>
            <p className="text-yellow-600 font-semibold">${item.price}</p>
           </div>
        </div>
        </div>
    );
};

export default Card1;
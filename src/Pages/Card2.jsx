/* eslint-disable react/prop-types */


const Card2 = ({item}) => {
    return (
        <div>
           <div className="card bg-base-100 h-[500px] shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl mb-3">{item.name}</h2>
    <p className="text-sm">{item.recipe}</p>
    <div className="card-actions">
      <button className="btn hover:btn-outline border-b-4 border-yellow-600 text-yellow-300">ADD tO CART</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Card2;
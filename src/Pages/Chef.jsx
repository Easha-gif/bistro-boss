import Heading from "../Shared/Heading";
import card1 from '../assets/assets/menu/salad-bg.jpg'
import card2 from '../assets/assets/menu/pizza-bg.jpg'
import card3 from '../assets/assets/menu/soup-bg.jpg'

const Chef = () => {
    return (
        <div>
            <Heading subHeading='Should Try' Heading='CHEF RECOMMENDS'></Heading>

<div className="flex flex-col lg:flex-row gap-5 mb-20">
<div className="card bg-base-100 shadow-xl w-fit">
  <figure className="px-10 pt-10">
    <img
      src={card1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="text-yellow-500 rounded-xl border-b-4 border-yellow-500 px-6 py-2">add to cart</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl w-fit">
  <figure className="px-10 pt-10">
    <img
      src={card2}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pizza</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="text-yellow-500 rounded-xl bg-gray-900 px-6 py-2">add to cart</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl w-fit">
  <figure className="px-10 pt-10">
    <img
      src={card3}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Soup</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="text-yellow-500 rounded-xl border-b-4 border-yellow-500 px-6 py-2">add to cart</button>
    </div>
  </div>
</div>
</div>


        </div>
    );
};

export default Chef;
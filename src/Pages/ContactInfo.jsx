
import Heading from "../Shared/Heading";

const ContactInfo = () => {
    return (
        <div>
            <Heading subHeading="Visits us" Heading='OUR LOCATION'></Heading>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
           <div className="bg-white shadow-lg border-4 rounded-xl p-2">
           <div className="bg-gray-300 p-9 rounded-md">
            <p className="bg-yellow-700/90 py-2 rounded-sm text-center text-white">p</p>
                <h1 className="text-center my-3 text-lg font-bold">PHONE</h1>
                <p className="text-center font-semibold text-gray-600">+38 (012) 34 56 789</p>
            </div>
           </div>
            <div  className="bg-white shadow-lg border-4 rounded-xl p-2">
            <div className="bg-gray-300 p-9 rounded-md">
            <p className="bg-yellow-700/90 py-2 rounded-sm text-center text-white">p</p>
                <h1 className="text-center my-3 text-lg font-bold">ADDRESS</h1>
                <p className="text-center font-semibold text-gray-600">Rajshahi ,Bangladesh</p>
            </div>

            </div>
           <div className="bg-white shadow-lg border-4 rounded-xl p-2">
           <div className="bg-gray-300 p-7 rounded-md">
           <p className="bg-yellow-700/90 py-2 rounded-sm text-center text-white">p</p>
                <h1 className="text-center my-3 text-lg font-bold">WORKING HOURS</h1>
                <p className="text-center font-semibold text-gray-600">Mon - Fri: 08:00 - 22:00
                Sat - Sun: 10:00 - 23:00</p>
            </div>

           </div>
           </div>

<Heading subHeading='Send a message' Heading='CONTACT FORM'></Heading>
<div className="bg-gray-100 w-10/12 mx-auto px-9 py-28 mb-20 rounded-md">
    <div className="flex flex-col lg:flex-row gap-4">
        {/* 1 */}
    <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text text-base font-bold">Name *</span>
          </label>
          <input type="email" placeholder="name" className="input input-bordered" required />
        </div>
        {/* 2 */}
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text text-base font-bold">Email *</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
    </div>
    {/* 3 */}
    <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-bold">Phone *</span>
          </label>
          <input type="email" placeholder="phone" className="input input-bordered" required />
        </div>
        {/* 4 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-bold">Message *</span>
          </label>
          <textarea className="p-2" name="message" placeholder="message" cols="10" rows="10"></textarea>
        </div>
        {/* 5 */}
        <div className="flex items-center mt-4  gap-3 bg-white shadow-lg p-3 rounded-md w-1/3">
        <input type="checkbox" className="checkbox checkbox-secondary" />
  <label className="cursor-pointer label">
    <span className="label-text">I am not a Robort</span>
  </label>
</div>

<div className="flex justify-center items-center mt-10">
    <button className="bg-yellow-700/90 py-2 px-10 text-white rounded-lg">Send Message</button>
</div>

</div>
        </div>
    );
};

export default ContactInfo;
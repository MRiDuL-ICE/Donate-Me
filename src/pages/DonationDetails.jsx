import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const DonationDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const formRef = useRef()

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCampaign = data.find((campaign) => campaign.id === parseInt(id));
        setCampaign(foundCampaign);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToastMessage("Thank you! We will reach your destination soon.");
    
    formRef.current.reset();


    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
  <div>
    <Header></Header>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#00bf63] text-center mb-8">{campaign.title}</h1>

      <div className="max-w-4xl p-10 mx-auto rounded-lg shadow-lg">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Description</h2>
          <p className="text-gray-700 mt-4">{campaign.description}</p>
          
          <div className="mt-4 flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">
              <span className="font-bold">Division:</span> {campaign.division}
            </h3>
            <h3 className="text-lg text-gray-800">
              <span className="font-bold">Contact:</span> {campaign.contactInfo}
            </h3>
            <div className="badge badge-outline text-[#00bf63] border-[#00bf63]">{campaign.status}</div>
          </div>
        </div>
        <div className="mt-8 bg-white p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Donation Form</h2>
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-lg font-medium text-gray-700">
                Quantity of Items
              </label>
              <input
                type="number"
                id="quantity"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="itemType" className="block text-lg font-medium text-gray-700">
                Item Type (e.g., jacket, blanket)
              </label>
              <input
                type="text"
                id="itemType"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pickupLocation"
                className="block text-lg font-medium text-gray-700"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="additionalNotes" className="block text-lg font-medium text-gray-700">
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-4 bg-[#00bf63] text-white rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Submit Donation
              </button>
            </div>
          </form>
        </div>

        {toastMessage && (
          <div className="fixed top-4 right-4 p-4 bg-[#00bf63] text-white rounded-md shadow-lg">
            {toastMessage}
          </div>
        )}

        
      </div>
      <div className="mt-8 text-center">
          <Link
            to="/donationcampaigns"
            className="py-3 px-4 bg-[#00bf63] text-white rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Back to Campaigns
          </Link>
        </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default DonationDetails;

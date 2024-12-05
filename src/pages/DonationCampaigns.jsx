import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";

const DonationCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [visibleCampaigns, setVisibleCampaigns] = useState(6);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCampaigns((prev) => prev + 6);
  };

  const toggleDescription = (campaignId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [campaignId]: !prev[campaignId],
    }));
  };

  const truncateDescription = (text, isExpanded) => {
    if (!text) return "";
    if (isExpanded) return text;
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  return (
    <div className="container w-full mx-auto px-4 py-8">
      <h1 className="text-4xl text-[#00bf63] font-bold text-center mb-8">
        Donation Campaigns
      </h1>
      <div className="grid sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.slice(0, visibleCampaigns).map((campaign) => (
          <div
            key={campaign.id}
            className="w-3/4 h-auto min-h-[40rem] flex flex-col mx-auto hover:scale-105 transition-all rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-xl duration-300"
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={campaign.image}
                alt={campaign.title}
              />
              <div className="absolute top-2 right-2 bg-[#00bf63] text-white px-3 py-1 rounded-full text-sm">
                {campaign.status}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-6 py-10 flex-grow">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 truncate">
                  {campaign.title}
                </h2>
                <div className="relative mt-2">
                  <p className="text-sm text-justify text-gray-600">
                    {truncateDescription(
                      campaign.description,
                      expandedDescriptions[campaign.id]
                    )}
                  </p>
                  {campaign.description?.length > 150 && (
                    <button
                      onClick={() => toggleDescription(campaign.id)}
                      className="flex items-center gap-1 text-[#00bf63] hover:text-green-700 mt-2 text-sm font-medium"
                    >
                      {expandedDescriptions[campaign.id] ? (
                        <>
                          Show Less
                          <MdKeyboardArrowUp className="text-lg" />
                        </>
                      ) : (
                        <>
                          Read More
                          <MdKeyboardArrowDown className="text-lg" />
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-bold">Division:</span>{" "}
                  {campaign.division}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-bold">Contact:</span>{" "}
                  {campaign.contactInfo}
                </div>
              </div>
              <Link
                to={`/donationdetails/${campaign.id}`}
                className="w-full py-2 px-4 text-center text-white bg-[#00bf63] rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <BiSolidDonateHeart className="text-xl" />
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCampaigns < campaigns.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="py-2 px-6 bg-[#00bf63] text-white rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            See More
            <MdKeyboardArrowDown className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationCampaigns;

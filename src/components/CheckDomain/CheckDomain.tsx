import React, { useState } from "react";
import "./CheckDomain.css";
const CheckDomain = () => {
  const [domain, setDomain] = useState("");
  const [availability, setAvailability] = useState("");
  const apiKey = "at_KamgQHJFMyFQVpWa65Iej5J8KMYzg";
  const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domain}&credits=DA`;

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.DomainInfo && data.DomainInfo.domainName) {
        const availabilityStatus = data.DomainInfo.domainAvailability;
        setAvailability(`${availabilityStatus}`);
      } else {
        setAvailability(`not found`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="checkDomain">
      <div className="w-4/5 mx-auto relative">
        <form action="" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Check your domain...."
            className="input input-bordered w-full pr-16"
            value={domain}
          />
          <input
            type="submit"
            value="Go"
            className="btn btn-primary absolute right-0"
          />
        </form>
        {availability && (
          <p className="text-left mt-4 text-white">
            Domain <span className="text-red-400">{domain}</span> is{" "}
            <span className="text-red-400">{availability}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckDomain;

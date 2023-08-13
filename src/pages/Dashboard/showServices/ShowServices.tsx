import React from "react";

const ShowServices = ({ receieveData }) => {
  return (
    <div className="col-span-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>image</th>
              <th>name</th>

              <th>services</th>
              <th>technology</th>
            </tr>
          </thead>
          <tbody>
            {receieveData &&
              receieveData?.map((data, index) => (
                <tr key={index}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`${data.image}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {data.servicename}
                    </span>
                  </td>
                  <td>{data.selectedCategory}</td>
                  <td>
                    {data.technology?.map((tech, index) => (
                      <span className="badge badge-ghost badge-sm" key={index}>
                        {tech.value}
                      </span>
                    ))}
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowServices;

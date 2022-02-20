import { useState, useEffect } from "react";

const UserTable = () => {
  const [ads, Setads] = useState([]);
  // const [showMsg, setshowMsg] = useState(true);

  useEffect(() => {
    fetch("https://ad-pushup-be.herokuapp.com/api/v1/Ads")
      .then((response) => response.json())
      .then((data) => Setads(data.data.Ads));
    // .then((data) => console.log(data.data.Ads));
  }, []);

  return (
    <div>
      <table>
        <thead className="table-head">
          <tr>
            <th>Campaign Name</th>
            <th>Copy Code</th>
            <th> Code</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {ads.map((ad) => {
            return (
              <tr>
                <td>{ad.campaignName}</td>
                <td>
                  <a href={`${ad.linkURL}`} target="_blank">
                    <img src={`${ad.imageURL}`} alt={`${ad.campaignName}`} />
                  </a>
                </td>
                <td>Code</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {ads && <p className="no-record">No ads created before</p>} */}
    </div>
  );
};

export default UserTable;

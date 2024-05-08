import PublicHolidaysHome from "../../assets/public-holidays-home.png";
import PublicHolidaysSearch from "../../assets/public-holidays-search.png";

import "../MyProject/publicHolidays.css";

function PublicHolidays() {
  return (
    <>
      <div className="div-public-holidays">
        <div>
          <h3>Find your public holidays</h3>
        </div>
        <img className="pics-public" src={PublicHolidaysHome} alt="" />
        <img className="pics-public" src={PublicHolidaysSearch} alt="" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugiat
          explicabo amet, qui perferendis aperiam, officia ut illo ea placeat
          vel quos animi labore voluptatem cum? Omnis accusamus dicta
          dignissimos?
        </p>
      </div>
    </>
  );
}

export default PublicHolidays;

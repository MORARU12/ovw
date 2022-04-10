import React from "react";

const ItemPage = () => {
  return (
    <div>
      <div className="modal">
        <div className="modal-item">
          <section className="absolute-icons">
            <button className="close">close</button>
            <div className="move-btns">
              <button className="top">top</button>
              <button className="bottom">bottom</button>
            </div>
          </section>
          <img
            className="item-img"
            src="https://cdn.ownvibe.app/live/product/70/videoThumbnail.jpg"
            alt=""
          />
          <section className="bottom-info-and-icons">
            <div className="item-info">
              <div className="item-profile-img">
                <img
                  src="https://cdn.ownvibe.app/live/user/profileImage/22/sm/22.jpg?v=1638142286"
                  alt=""
                />
              </div>
              <p className="nickname">nickname</p>
              <p className="item-description">item description</p>
              <p className="views-number">
                <span>836</span> views
              </p>
            </div>

            <div className="item-icons">
              <div className="like-icon">
                <p>45k</p>
              </div>
              <div className="save-icon"></div>
              <div className="comment-icon"></div>
              <div className="sound-icon"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

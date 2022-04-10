import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ItemLoader from "../static/ItemLoader";

const FeedItem = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <>
        <ItemLoader />
        <ItemLoader />
        <ItemLoader />
      </>
    );
  }

  return (
    <>
      {users.map((user) => {
        return (
          <Link to="/item">
            <div className="item" key={user.id}>
              <img
                src={`https://cdn.ownvibe.app/live/product/${user.id}/videoThumbnail.jpg`}
                alt=""
              />
              <div className="play-icon"></div>
              <div className="shadows">
                <section className="shadow"></section>
                <section className="shadow shadow-bottom"></section>
              </div>
              <section className="item-info">
                <img
                  src={`https://cdn.ownvibe.app/live/user/profileImage/${user.user.id}/sm/${user.user.profileImageName}`}
                  alt=""
                />
                <p>
                  {user.price} {user.currency}
                </p>
              </section>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default FeedItem;

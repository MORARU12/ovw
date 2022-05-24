import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOutsideTrigger from "../hooks/outsideTrigger";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { productsCount, users, hashtags } = useTypedSelector(
    (state) => state.search
  );
  const { getSearch } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [closeSearchModal, setCloseSearchModal] = useState(false);
  const wrapperRef = useRef(null);

  const [searchType, setSearchType] = useState("word"); // word | hashtag

  const handleCloseSearchModal = () => {
    setCloseSearchModal(true);
  };

  useOutsideTrigger(wrapperRef, handleCloseSearchModal);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (closeSearchModal) {
      setCloseSearchModal(false);
    }
    getSearch(e.target.value);
    //console.log(searchValue);
  };

  // useEffect(() => {
  //   console.log(hashtags);
  // }, [hashtags]);

  return (
    <div className="header">
      <div className="header-placeholder"></div>
      <section>
        <div className="logo-plh">
          <NavLink
            to=""
            style={{ height: "fit-content", display: "flex", color: "white" }}
          >
            <div className="logo"></div>
            <p>Ownvibe</p>
          </NavLink>
        </div>
        <div className="search-plh" ref={wrapperRef}>
          <div className="input-plh">
            <input
              ref={inputRef}
              type="search"
              id="search-input"
              placeholder="search"
              autoComplete="off"
              onChange={handleSearch}
            />
          </div>
          <div
            className="drop-down"
            style={{
              display: searchValue && !closeSearchModal ? "initial" : "none",
            }}
          >
            {productsCount && (
              <p
                style={{ color: "red" }}
                onClick={() => {
                  navigate("/search");
                  setCloseSearchModal(true);
                }}
              >
                products count: {productsCount}
              </p>
            )}
            {users && <p style={{ color: "blue" }}>users:</p>}
            {users?.map((user) => (
              <div key={user.id}>
                <div>
                  <img
                    src={
                      user.profileImageName === "DefaultProfile.png"
                        ? "https://cdn.ownvibe.app/live/user/profileImage/DefaultProfile.png"
                        : `https://cdn.ownvibe.app/live/user/profileImage/${user.id}/xs/${user.profileImageName}`
                    }
                    height={20}
                    width={20}
                  />
                </div>
                <p>
                  {user.username} {user.productsCount}
                </p>
              </div>
            ))}
            {hashtags &&
              hashtags?.map((hashtag) => (
                <div key={hashtag.hashtag}>
                  <p>
                    "{hashtag.hashtag}" products count: {hashtag.productsCount}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="app-buttons">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/ownvibe/id1579180780"
            rel="noopener noreferrer"
          >
            <button className="app-btn">
              <span>App Store</span>
              <div className="apple"></div>
            </button>
          </a>
          <div style={{ width: "20px" }}></div>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.ownvibe.app&fbclid=IwAR32C0zSQotxi01SoH1iFaYe8EioEwpF0uFG0fY9YEz0bEuAJtDWC5R78rg&ref=producthunt"
            rel="noopener noreferrer"
          >
            <button className="app-btn">
              <span>Google Play</span>
              <div className="android"></div>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;

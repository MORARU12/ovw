import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOutsideTrigger from "../hooks/outsideTrigger";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Header = () => {
  const { productsCount, users } = useTypedSelector((state) => state.search);
  const { getSearch } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [closeSearchModal, setCloseSearchModal] = useState(false);
  const wrapperRef = useRef(null);

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
    console.log(searchValue);
    // inputRef.current.blur();
  };
  return (
    <div className="header">
      <div className="header-placeholder"></div>
      <section>
        <div className="logo-plh">
          <div className="logo"></div>
          <p>Ownvibe</p>
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
            <Link to="/search">
              <p style={{ color: "red" }}>products count: {productsCount}</p>
            </Link>
            <p style={{ color: "blue" }}>users:</p>
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
          </div>
        </div>

        <div className="app-buttons">
          <button className="app-btn">
            {/* <span>App Store</span> */}
            <div className="apple"></div>
          </button>
          <div style={{ width: "20px" }}></div>
          <button className="app-btn">
            {/* <span>Google Play</span> */}
            <div className="android"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;

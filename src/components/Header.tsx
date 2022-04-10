import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Header = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.value);
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
        <div className="search-plh">
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
            style={{ display: searchValue ? "initial" : "none" }}
          >
            <p>items button</p>

            {users
              .filter((user) => {
                if (searchValue == "") {
                  return user.user.username;
                } else if (
                  user.user.username
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                ) {
                  return user.user.username;
                }
              })
              .map((user) => {
                return (
                  <>
                    <div className="play-icon"></div>
                    <div className="hashtag-icon"></div>
                    <p key={user.id}>{user.user.username}</p>
                  </>
                );
              })}
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

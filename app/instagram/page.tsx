'use client'
import React, { useState } from "react";

interface User {
  position: number;
  user: {
    username: string;
    full_name: string;
  };
}

interface InstagramResponse {
  users: User[];
}

export default function Instagram() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setIsLoading(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "e76efd42f7msh1e6ad3422f4fd08p145587jsne1d97f5997b3",
          "X-RapidAPI-Host": "instagram191.p.rapidapi.com",
        },
      };
      fetch(`https://instagram191.p.rapidapi.com/search/?query=${search}`, options)
        .then((response) => response.json())
        .then((data: InstagramResponse) => {
          if (data && data.users && data.users.length > 0) {
            setUserList(data.users);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="justify-center space-y-3 mt-10 lg:flex lg:w-[500px] lg:items-center lg:flex-col items-center">
      <form className="flex place-self-center w-full mx-auto" onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 px-3 rounded-md shadow-inner text-xl font-bold"
          placeholder="Search Instagram"
        />
        <button
          type="submit"
          className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      <div className="border shadow-md rounded-md w-full py-10">
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              <div>Username: {user.user.username}</div>
              <div>Full name: {user.user.full_name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

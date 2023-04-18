'use client'
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import FormSearch from "@/components/FormSearch";
import { InstagramRes } from "@/types/userInstagram/Instagram.SearchRes";
import { UserInstagram } from "@/types/userInstagram/Instagram.User";
import React, { use, useState } from "react";
import UserList from "./Instagram.UserList";



export default function Instagram() {
  const [resultInfo, setResultInfo] = useState(false)
  const [searchResult, setSearchResult] = useState('')
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState<UserInstagram[]>([]);

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
        .then((data: InstagramRes) => {
          if (data && data.users && data.users.length > 0) {
            setUserList(data.users);
          }
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
          setResultInfo(true)
          setSearchResult(search)
          setSearch('')
        })
    }
  };

  return (
    <div className="justify-center space-y-3 mt-10 lg:flex lg:w-[500px] lg:items-center lg:flex-col items-center mb-10">
      <Banner title="Instagram" logo="/img/banner/instagram.svg" size='lg:h-28 lg:w-28 h-24 w-24' />
      <form className='flex place-self-center w-full mx-auto ' onSubmit={onSearchSubmit}>
        <FormSearch value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit" isLoading={isLoading} />
      </form>
      {resultInfo ? <UserList userList={userList} searchResult={searchResult} /> : ""}
    </div>
  );
}

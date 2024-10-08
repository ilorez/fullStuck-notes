import React from 'react';

type GitHubUser = {
  avatar_url: string;
  bio: String;
  login: string;
  name: String;
};

function User({ avatar_url, bio, name, login }: GitHubUser) {
  return (
    <div className=" w-fit bg-gray-50 shadow-lg px-16 py-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <img
            src={avatar_url}
            alt="github profile avatar"
            width={200}
            className="rounded-full"
          />
        </div>
        <div className="flex  items-center justify-center w-full flex-wrap">
          <p>
            {login} <span className="text-gray-400">({name})</span>
          </p>
        </div>
        <div className="flex flex-col  items-center justify-center w-full">
          <p className="pl-2 font-bold">{bio}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4 [&>img]:h-full">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${login}&show_icons=true&locale=en&layout=compact`}
          alt={login}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&locale=en`}
          alt={login}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${login}&`}
          alt={login}
        />
      </div>
    </div>
  );
}

export default User;

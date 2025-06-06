import React from "react";

export const Logo = ({ header }) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://assets.easygenerator.com/fragment/auth-page/2025.05.20.master-6e6b7fc251/0ff54e5c89d0cdcadb2147ace755ef96.svg"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {header}
        </h2>
      </div>
    </>
  );
};

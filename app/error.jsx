"use client";
import Error from "next/error";

function ErrorPage({ error, reset }) {
  return <div>error :{error.message} </div>;
}

export default ErrorPage;

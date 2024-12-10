import React from "react";
import Link from "next/link";
import "./header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          </ul>
          <div className="auth">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

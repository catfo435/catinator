import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import CatPic from './CatPic'
import Header from './Header'

export default function CatPage() {
  return (
    <>
      <Header />
      <CatPic />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CatPage />
);


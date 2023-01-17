import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import CatPic from './CatPic'

export default function CatPage() {
  return (
    <CatPic />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CatPage />
);


import React from 'react'
import { Link } from "react-router-dom";
import IconType from "./Svgicons"

export default function Sociallinks(props) {
    const {sitename, url , active , id} = props;
  return (
    <>
    {active? 
      <Link key={id}  to={url} className="text-decoration-none">
        <IconType iconname={sitename} />
      </Link>
      : null
    }
    </>
  )
}

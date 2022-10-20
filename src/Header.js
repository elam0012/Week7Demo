import React from "react"
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"


export default function Header() {
  return(
    <>
      <h1>My Store</h1>
      <Button component={NavLink} to="/" variant="contained">Men</Button>
      <Button component={NavLink} to="/women" variant="contained">Women</Button>
    </>
  )
}
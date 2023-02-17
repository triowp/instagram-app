


import classNames from 'classnames'
import React from 'react'
import cls from "../../../assets/styles/forms/Forms.module.scss"
import Icons from "../../../assets/images/icons/sprite_core_2x.png"




export default function Errors({err}) {
    console.log(err)

    const errHandeler = () => {



        if(err === undefined) {
            return cls.icons
        } else if(err === "err") {
            return classNames(cls.err_icons, cls.icons)
        } else if (err === "success") {
            return cls.icons
        }
    }


  return (
    <div 
        style={{background: `url(${Icons})`}} 
        className={errHandeler()}
/>
  )
}

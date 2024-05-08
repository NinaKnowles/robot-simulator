import React from "react"

export const readyMessage = () => { 
    return(
    <p className="text-centre">Ready!</p> 
)}

export const defaultMessage = () => { 
    return(
    <p className="text-centre">Robot Simulator</p> 
  )}

export const limitExceededMessage = () => { 
    return(
    <p className="text-centre warning-message">Limit Exceeded</p> 
  )
}
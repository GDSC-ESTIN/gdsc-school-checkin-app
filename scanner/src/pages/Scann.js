import React, { useEffect, useState } from 'react'
import QrReader from 'react-scan-qr'
export const Scanner = () => {
  const classNameStyles = ['okclass','300class','400class']
  const [id , setId] = useState('')
  const [message , setMessage] = useState('')
  const [classNameStyle , setClassNameStyle] = useState('')
    const handleScann = async(e)=>{
        setId(e)
        const response = await fetch('url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id : id
          })
      });
      const data = await response.json()
      setClassNameStyle(classNameStyles[[200 , 300 , 400].indexOf(response.status)])
      setMessage(data.message)
    }
    const handleError=(e)=>{
        console.log(e)
    }
  return (
    <div>
      <QrReader onScan={handleScann} onError={handleError} delay={2000} style={{height:'100px'}} showViewFinder={false}></QrReader>
      <div>
        {message}
      </div>
    </div>

  )
}

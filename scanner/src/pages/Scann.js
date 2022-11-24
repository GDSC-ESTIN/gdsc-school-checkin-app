import React, { useState } from 'react'
import QrReader from 'react-scan-qr'

const url = "http://127.0.0.1:5000/api/v1/postData"



export const Scanner = () => {
  const classNameStyles = ['okclass', '300class', '400class']
  const [id, setId] = useState('')
  const [message, setMessage] = useState('')
  const [classNameStyle, setClassNameStyle] = useState('')
  const handleScann = async (e) => {
    if (e) {
      setId(e)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: e
        })
      });
      const data = await response.json()
      setClassNameStyle(classNameStyles[[200, 300, 404].indexOf(response.status)])
      setMessage(data.message)
      console.log(data.message)
      console.log(response.status)
      console.log(classNameStyle)
    }
  }
  const handleError = (e) => {
    console.log(e)
  }
  return (
    <div>
      <QrReader onScan={handleScann} onError={handleError} delay={500} style={{ width: '500px' }} showViewFinder={false}></QrReader>
      <div>
        {message}
      </div>
      <div>
        {id}
      </div>
    </div>

  )
}

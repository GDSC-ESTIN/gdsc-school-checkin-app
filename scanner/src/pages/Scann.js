import React, { useEffect, useState } from 'react'
import QrReader from 'react-scan-qr'

const url = "https://mouayed-keziz-fictional-bassoon-wjjjw9jjqp4h556p-5000.preview.app.github.dev/api/v1/postData"



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
      setClassNameStyle(classNameStyles[[200, 300, 400].indexOf(response.status)])
      setMessage(data.message)
      console.log(data.message)
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

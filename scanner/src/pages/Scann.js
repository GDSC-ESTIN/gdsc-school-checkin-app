import React, { useState } from 'react'
import QrReader from 'react-scan-qr'

const url = "http://127.0.0.1:5000/api/v1/postData"



export const Scanner = () => {
  const classNameStyles = ['accepted', 'already-accepted', 'not-accepted']
  const handleScann = async (e) => {
    if (e) {
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
      console.table({ ...data, status: response.status });
      setClassNameStyle(classNameStyles[[200, 300, 404].indexOf(response.status)])
    }
  }
  const handleError = (e) => {
    console.log(e)
  }
  return (
    <div>
      <QrReader onScan={handleScann} onError={handleError} delay={500} style={{ width: '500px' }} showViewFinder={false}></QrReader>
      <div>
      </div>
      <div>
      </div>
    </div>

  )
}

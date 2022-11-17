import React from 'react'
import data from '../public/jokes.json' assert { type: 'JSON' };
export default function getJoke() {
  let keys: string[] = Object.keys(data)
  let ranIndex: number = Math.floor(Math.random() * keys.length);
  return (
    data[ranIndex]
  )
}

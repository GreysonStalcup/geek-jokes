import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { AiOutlineLoading3Quarters, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link';



export default function Home() {
  const [joke, setJoke] = useState("");
  const [ isLoading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState("");
  
  useEffect(() => {
    setLoading(true)
    fetch('/api/joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
    });
  }, [])

  const handleNewJoke = () => {
    setLoading(true)
    fetch('/api/joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
        setAlert("")
    });
  }
    const handleCopyToClip = () => {
      navigator.clipboard.writeText(joke)
        .then(() => {
          setAlert("Joke copied to clipboard!");
        })
    }
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.geek_word}>Geek</span>Jokes</h1>
        <p className={styles.description}>Randomly Generated Jokes provided by a RESTful API</p>
        {alert && <div className={styles.alert}>
          {alert}
          </div>
          }
        <div className={styles.card} onClick={handleCopyToClip}>

          {isLoading  && <div className={styles.loading_icon_div}><AiOutlineLoading3Quarters className={styles.loading_icon} size={40}/></div> }

          {!joke ?  "No joke could be loaded." : joke }

          
        </div>
        <button className={styles.new_joke_button} onClick={handleNewJoke}>New Joke</button>

        
        
      </main>
      <footer className={styles.footer}>
        <Link href="https://github.com/GreysonStalcup/geek-jokes" target={"blank"}><AiFillGithub size={45} /></Link>
      </footer>  
    </div>
  )
}

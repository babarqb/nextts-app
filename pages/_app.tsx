import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Component} from "react";

function App(props: AppProps) {
  let {Component, pageProps} = props;
  return <Component {...pageProps} />
}

export default App

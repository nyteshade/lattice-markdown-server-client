import React, { Component } from 'react'

import styles from './SampleHeader.css'
import logo from './logo.svg';

export class SampleHeader extends Component {
  render() {
    return (
      <header class={styles.AppHeader}>
        <img src={logo} class={styles.AppLogo} alt="logo" />
        <h1 class={styles.AppTitle}>Welcome to React &amp; GraphQL</h1>
      </header>
    )
  }
}

export default SampleHeader

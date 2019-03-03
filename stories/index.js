import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Profile from '../components/Profile'

storiesOf('Layout', module).add('default', () => (
  <Layout>
    <ul>
      <li>a</li>
      <li>a</li>
      <li>a</li>
    </ul>
    <h1>hogehoge</h1>
  </Layout>
))
storiesOf('Menu', module).add('default', () => <Menu />)
storiesOf('Profile', module).add('default', () => <Profile />)

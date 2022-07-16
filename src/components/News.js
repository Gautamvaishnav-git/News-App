import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  render() {
    return (
      <div>
        this one is News Component
        <NewsItem/>
      </div>
    )
  }
}


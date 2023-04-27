import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const BlogReader = (props) => {
    const {uri} = props
  return (
    <WebView source={{ uri: uri }} />
  )
}

export default BlogReader
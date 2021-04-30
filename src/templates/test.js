import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export default function Test(props) {
  const {
    children,
  } = props
  return (
    <MDXProvider>
      <div>{children}</div>
    </MDXProvider>
  )
}

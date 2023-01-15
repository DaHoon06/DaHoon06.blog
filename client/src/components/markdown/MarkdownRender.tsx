import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import style from '@styles/markdown/markdown.module.scss'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import { Typography } from '@components/common/typography/Typography'

interface Props {
  readMd?: any
}

const markdown = `
  ### 제목 타이틀 (h1)
  
  **굵게**
  일반 텍스트
  
  \`\`\`
    console.log('hello world')
  \`\`\`

  ___     
    
   
  *이텔릭*
  
  글자 
  
  
  > 인용문
`

const InlineCode = styled.span`
  background: #4891ff;
`

const Pre = styled.pre`
  color: #000000;
  background-color: #dcdcdc;
  padding: 2rem;
  margin: 1rem auto;
`

function CodeBlock(children: { value: React.ReactNode }) {
  return (
    <Pre>
      <code>{children.value}</code>
    </Pre>
  )
}

const BlockQuotaStyle = styled.blockquote`
  border-bottom: 1px solid #545252;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-top: 1em;
  padding-left: 4px;
  color: #222222;
  font-weight: 600;
`

function BlockQuota(children: { children: React.ReactNode }) {
  return (
    <BlockQuotaStyle>
      <Typography variant={'sub2'} fontColor={'black'} fontWeight={'semibold'}>
        {children.children}
      </Typography>
    </BlockQuotaStyle>
  )
}

function InlineCodeBlock(children: { value: React.ReactNode }) {
  return (
    <InlineCode>
      <Typography variant={'sub1'}>{children.value}</Typography>
    </InlineCode>
  )
}

const MarkDown = React.memo(({ ...props }: Props) => {
  const [mdFile, setMdFile] = useState('')

  // const source = require('../../../posts/test.md')
  // fetch(source.default)
  //   .then((r) => r.text())
  //   .then((text) => {
  //     console.log(text)
  //     setMdFile(text)
  //   })

  // const mdRead = async () => {
  //   const res = await readMd.readGithubMd()
  //   await setMdFile(res)
  // }
  // const { readMd } = props
  // useEffect(() => {
  //   mdRead()
  // }, [])

  const renderers: any = {
    InlineCode: InlineCodeBlock,
    code: CodeBlock,
    blockquote: BlockQuota,
  }

  return (
    <article className={style.markdown__wrapper}>
      <ReactMarkdown
        {...props}
        children={markdown}
        rehypePlugins={[remarkGfm]}
        components={renderers}
      />
    </article>
  )
})
export default MarkDown

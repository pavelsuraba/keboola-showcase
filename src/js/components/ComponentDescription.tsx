import { memo } from 'react'
import Highlighter from 'react-highlight-words'

type Props = {
  query: string
  description: string
}

const ComponentDescriptionPure = ({ query, description }: Props) => {
  return <Highlighter searchWords={[query]} textToHighlight={description} />
}

export const ComponentDescription = memo(ComponentDescriptionPure)

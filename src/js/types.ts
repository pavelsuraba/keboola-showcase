export type Component = {
  id: string
  name: string
  icon: Icon
  categories: string[]
  version: string
  shortDescription: string | null
  longDescription: string | null
}

type Icon = {
  32: string | null
  64: string | null
  128: string | null
}

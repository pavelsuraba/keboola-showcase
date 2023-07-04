import useSWR from 'swr'

export type Component = {
  id: string
  vendor: string
  type: string
  shortDescription: string
  version: string
  name: string
  icon: Icon
}

type Icon = {
  32: string
  64: string
  128: string
}

export type ComponentsResponse = Array<Component>

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useKeboolaData = <T>(url: string) => {
  const response = useSWR<T>(url, fetcher)

  return response
}

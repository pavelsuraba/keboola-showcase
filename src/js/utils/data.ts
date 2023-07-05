import useSWR from 'swr'

export const getComponentsUrl = (offset = 0, limit = 1000) =>
  `https://apps-api.keboola.com/apps?offset=${offset}&limit=${limit}`

export const getComponentDetailUrl = (id: string) =>
  `https://apps-api.keboola.com/apps/${id}`

export type Component = {
  id: string
  categories: string[]
  shortDescription: string | null
  name: string
  icon: Icon
}

type Icon = {
  32: string | null
  64: string | null
  128: string | null
}

export type ComponentsResponse = Array<Component>
export type ComponentDetailResponse = Component & {
  version: string
  longDescription: string | null
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useKeboolaComponentData = () => {
  const { data: rawData, ...rest } = useSWR<ComponentsResponse>(
    getComponentsUrl(),
    fetcher,
  )
  const data: Component[] = []

  if (rawData) {
    rawData.forEach((component) => {
      data.push({
        id: component.id,
        name: component.name,
        icon: component.icon,
        categories: component.categories,
        shortDescription: component.shortDescription,
      })
    })
  }

  return {
    data: rawData ? data : undefined,
    ...rest,
  }
}

export const useKeboolaData = <T>(url: string) => {
  const response = useSWR<T>(url, fetcher)

  return response
}

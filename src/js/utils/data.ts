import useSWR from 'swr'
import { Component } from '../types'

export const getComponentsUrl = (offset = 0, limit = 1000) =>
  `https://apps-api.keboola.com/apps?offset=${offset}&limit=${limit}`

export const getComponentDetailUrl = (id: string) =>
  `https://apps-api.keboola.com/apps/${id}`

export type ComponentsResponse = Array<Component>
export type ComponentDetailResponse = Component

const swrOptions = {
  revalidateOnFocus: false,
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useKeboolaComponentData = () => {
  const { data: rawData, ...rest } = useSWR<ComponentsResponse>(
    getComponentsUrl(),
    fetcher,
    swrOptions,
  )
  const data: Component[] = []

  if (rawData) {
    rawData.forEach((component) => {
      data.push({
        id: component.id,
        name: component.name,
        icon: component.icon,
        categories: component.categories,
        version: component.version,
        shortDescription: component.shortDescription,
        longDescription: component.longDescription,
      })
    })
  }

  return {
    data: rawData ? data : undefined,
    ...rest,
  }
}

export const useKeboolaData = <T>(url: string | null) => {
  const response = useSWR<T>(url, fetcher, swrOptions)

  return response
}

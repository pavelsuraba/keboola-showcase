import type { Component } from '../types'

type Props = {
  icon: Component['icon']
}

export const ComponentIcon = ({ icon }: Props) => {
  const src = icon[128] || icon[64] || icon[32]

  return (
    <>
      {src ? (
        <img src={src} alt="" className="w-8 h-8 object-cover" />
      ) : (
        // Fallback placeholder
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      )}
    </>
  )
}

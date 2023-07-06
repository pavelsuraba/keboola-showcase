import { create } from 'zustand'
import type { Component } from './types'

type State = {
  component: null | Component
  setComponent: (component: Component | null) => void
}

export const useActiveComponentStore = create<State>((set) => ({
  component: null,
  setComponent: (component: Component | null) => set(() => ({ component })),
}))

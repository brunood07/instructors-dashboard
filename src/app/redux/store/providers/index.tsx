'use client'
import { ReactNode } from "react"
import { store } from "..";
import { Provider } from "react-redux";

type ProviderProps = {
  children: ReactNode;
}

export function CustomProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>
}
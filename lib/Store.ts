
import { configureStore } from '@reduxjs/toolkit'
import LogoSlice from './Features/Logo/LogoSlice'
import HeroSlice from './Features/Hero/HeroSlice'
import AboutSlice from './Features/About/AboutSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        logo: LogoSlice,
        hero: HeroSlice,
        about: AboutSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



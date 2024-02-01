
'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LogoSlice<T> = {
    value: string,
    init: string,
}
  

const initialState: LogoSlice<string> ={
    value: 'לוגו',
    init: 'לוגו',
}

export const LogoSlice = createSlice({
    name: 'Logo',
    initialState,
    reducers: {
        editLogo: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})


export const { editLogo } = LogoSlice.actions
export default LogoSlice.reducer  

'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type HeroSlice<T> = {
    header: {
        value: string,
        init: string,
    },
    sub: {
        value: string,
        init: string,
    },
    btn1: {
        value: string,
        init: string,
    }
    btn2: {
        value: string,
        init: string,
    }


}


const initialState: HeroSlice<string> = {
    header: {
        value: 'שם חברה',
        init: 'שם חברה',
    },
    sub: {
        value: 'שווה דגש ',
        init: 'שווה דגש ',
    },
    btn1: {
        value: 'אקשן 1',
        init: 'אקשן 1'
    },
    btn2: {
        value: 'אקשן 2',
        init: 'אקשן 2'
    }
}

export const HeroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    editHero: (state, action: PayloadAction<{ sectionName: keyof HeroSlice<string>; value: string }>) => {
      const { sectionName, value } = action.payload;
      state[sectionName].value = value;
    },
  },
});

export const { editHero } = HeroSlice.actions;
export default HeroSlice.reducer;
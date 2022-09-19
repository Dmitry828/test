import { createAction } from '@reduxjs/toolkit';

export const REQUEST_SEARCH = createAction<string>('request/search');
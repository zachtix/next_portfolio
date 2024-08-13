import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProjectsState, Project } from './type';

const initialState: ProjectsState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    getProjectsSuccess(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
  },
});

export const { getProjectsSuccess } = projectSlice.actions;
export default projectSlice.reducer;

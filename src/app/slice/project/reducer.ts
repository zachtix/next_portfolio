import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProjectsState, Project } from './type';

const initialState: ProjectsState = {
  project: {},
  projects: [],
};

export const projectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    getProjectsSuccess(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
    getProjectSuccess(state, action: PayloadAction<Project[]>) {
      state.project = action.payload;
    },
  },
});

export const { getProjectsSuccess, getProjectSuccess } = projectSlice.actions;
export default projectSlice.reducer;

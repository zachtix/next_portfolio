import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getProjectsSuccess, getProjectSuccess } from './reducer';

export const getProjects = () => async (dispatch: Dispatch) => {
  try {
    const result = await axios.get(`/api/project`);
    dispatch(getProjectsSuccess(result.data.result));
  } catch (error) {
    console.log(error);
  }
};

export const getProject = (id: string) => async (dispatch: Dispatch) => {
  try {
    const result = await axios.get(`/api/project/${id}`);
    dispatch(getProjectSuccess(result.data.result));
  } catch (error) {
    console.log(error);
  }
};

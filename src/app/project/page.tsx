'use client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../slice';
import { getProjectsSuccess } from '../slice/project/reducer';
import type { Project } from '../slice/project/type';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: RootState) => state.project.projects as Project[]
  );
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await axios.get('/api/project');
        dispatch(getProjectsSuccess(result.data.result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      {projects.map((item) => (
        <div key={item.name}>
          <h1 className="text-slate-700 font-bold">{item.name}</h1>
          {item.tags.map((tag) => (
            <p>{tag.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Project;

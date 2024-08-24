'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../slice';
import type { Project } from '../../slice/project/type';
import { getProject } from '../../slice/actions';

function page({ params }: { params: { slug: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const project = useSelector(
    (state: RootState) => state.project.project as Project
  );
  useEffect(() => {
    dispatch(getProject(params.slug));
  }, []);
  return <p>Project: {project.name}</p>;
}

export default page;

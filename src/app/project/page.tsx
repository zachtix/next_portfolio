'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../slice';
import type { Project } from '../slice/project/type';
import { getProjects } from '../slice/actions';

function Project() {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(
    (state: RootState) => state.project.projects as Project[]
  );
  useEffect(() => {
    document.title = 'Project';
    dispatch(getProjects());
  }, []);
  const badge = (tag: string) => {
    switch (tag) {
      case 'Frontend':
        return 'badge frontend';
      case 'Backend':
        return 'badge backend';
      case 'Prisma':
        return 'badge prisma';
      case 'React':
        return 'badge react';
      case 'Javascript':
        return 'badge javascript';
      case 'Typescript':
        return 'badge typescript';
      case 'Next.js':
        return 'badge nextjs';
      default:
        return 'badge';
    }
  };
  return (
    <div className="container mx-auto mt-4 mb-20 px-2 sm:px-0 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {projects.map((item, indexProject) => (
        <div
          key={indexProject}
          className="col-span-1 rounded-xl p-3 flex flex-col gap-2 bg-[#272829] hover:bg-[#2b2e33] transition duration-300"
        >
          <h1 className="flex gap-3 justify-between">
            <Link
              href={`/project/${item.id}`}
              className="tracking-wider font-bold"
            >
              {item.name}
            </Link>
            <div className="flex gap-1">
              {item.tags.map((tag, indexTag) => (
                <p className={`${badge(tag.name)}`} key={indexTag}>
                  {tag.name}
                </p>
              ))}
            </div>
          </h1>
          <Link
            href={`/project/${item.id}`}
            className="rounded-xl overflow-hidden"
          >
            <img src={item.thumbnailImage} className="w-full" alt="" />
          </Link>
          <div className="flex flex-wrap gap-1">
            {item.stacks.map((stack, indexStack) => (
              <p className={`${badge(stack.name)}`} key={indexStack}>
                {stack.name}
              </p>
            ))}
          </div>
          <div className="">
            <p className="line-clamp-3 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
      {projects.length < 1
        ? Array.from({ length: 6 }).map((_, index) => (
            <div className="col-span-1 rounded-xl p-3 flex flex-col gap-3 bg-[#272829] hover:bg-[#2b2e33] transition duration-300 animate-pulse">
              <div className="flex justify-between items-center">
                <div className="w-48 h-4 bg-slate-200 rounded-2xl" />
                <div className="w-20 h-6 bg-slate-200 rounded-2xl" />
              </div>
              <div className="h-48 bg-slate-200 rounded-2xl" />
              <div className="flex gap-2">
                <div className="w-20 h-6 bg-slate-200 rounded-2xl" />
                <div className="w-20 h-6 bg-slate-200 rounded-2xl" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1 h-4 bg-slate-200 rounded-2xl" />
                <div className="col-span-2 h-4 bg-slate-200 rounded-2xl" />
                <div className="col-span-2 h-4 bg-slate-200 rounded-2xl" />
                <div className="col-span-1 h-4 bg-slate-200 rounded-2xl" />
              </div>
            </div>
          ))
        : undefined}
    </div>
  );
}

export default Project;

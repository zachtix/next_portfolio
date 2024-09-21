'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../slice';
import type { Project } from '../../slice/project/type';
import { getProject } from '../../slice/actions';
import DOMPurify from 'dompurify';

function page({ params }: { params: { slug: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const project = useSelector(
    (state: RootState) => state.project.project as Project
  );
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
  useEffect(() => {
    dispatch(getProject(params.slug));
  }, []);
  useEffect(() => {
    document.title = `Project | ${project.name}`;
  }, [project]);
  return (
    <>
      <div className="container mx-auto mt-4">
        <Link className="cursor-pointer text-3xl hidden" href="/project">
          {'<'} Back
        </Link>
        <div className={`${!project.name ? 'animate-pulse' : undefined}`}>
          {project && project.id == params.slug ? (
            <div className="space-y-5 px-3 sm:px-0">
              <div className="block md:flex justify-center items-center gap-1">
                <h1 className="text-3xl">Project: {project.name}</h1>
                <div className="flex gap-1">
                  {project &&
                    project.tags?.map((tag, indexTag) => (
                      <p className={`${badge(tag.name)}`} key={indexTag}>
                        {tag.name}
                      </p>
                    ))}
                  {project &&
                    project.stacks?.map((stack, indexStack) => (
                      <p className={`${badge(stack.name)}`} key={indexStack}>
                        {stack.name}
                      </p>
                    ))}
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(project.content),
                }}
              />
            </div>
          ) : (
            <>
              <div className="space-y-3 hidden">
                <div className="rounded-2xl bg-slate-200 h-8 w-56" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded-lg col-span-2" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                </div>
                <div className="h-4 bg-slate-200 rounded-lg" />
                <div className="grid grid-cols-5 gap-4">
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-3" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded-lg col-span-2" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-3" />
                  <div className="h-4 bg-slate-200 rounded-lg col-span-1" />
                </div>
                <div className="h-4 bg-slate-200 rounded-lg" />
                <div className="h-80 bg-slate-200 rounded-lg" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default page;

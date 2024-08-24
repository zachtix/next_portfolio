'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../slice';
import type { Project } from '../slice/project/type';
import { getProjects } from '../slice/actions';

const mockData = [
  {
    id: 1,
    name: 'Javascripts',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae facilis corrupti eum beatae iusto recusandae labore provident necessitatibus illum, explicabo animi fugit esse alias laborum suscipit totam a! Magnam quia in vel cum molestias quas eum fugit deleniti aliquam, ad tempora quos et omnis autem non numquam voluptas facilis necessitatibus, natus itaque! Quibusdam numquam ratione recusandae est ipsam animi atque beatae laborum amet unde et asperiores, esse obcaecati ab, repellendus assumenda excepturi consequatur, earum praesentium! Non delectus ad odit blanditiis illum nobis eligendi sed debitis pariatur dignissimos iure ducimus neque incidunt, dolorum quam aliquid consectetur quisquam ratione fuga inventore tempore.',
    link: '',
    repoLink: '',
    thumbnailImage:
      'https://b2dmain-ruk.cdn.jelastic.net/wp-content/uploads/2024/07/code-no-low-blog-600x403.jpg',
    content: '',
    stacks: [
      {
        id: 5,
        name: 'Next.js',
      },
      {
        id: 4,
        name: 'React',
      },
      {
        id: 3,
        name: 'Prisma',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 1,
        name: 'Javascript',
      },
      {
        id: 3,
        name: 'Prisma',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 1,
        name: 'Javascript',
      },
    ],
    tags: [
      {
        id: 2,
        name: 'Backend',
      },
      {
        id: 1,
        name: 'Frontend',
      },
    ],
  },
];
const repeatedMockData = Array.from({ length: 10 }, () => mockData).flat();

function Project() {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(
    (state: RootState) => state.project.projects as Project[]
  );
  useEffect(() => {
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
    <div className="container mx-auto mb-10 px-2 sm:px-0 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {repeatedMockData.map((item, indexProject) => (
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
    </div>
  );
}

export default Project;

'use client';

import React, { useEffect, useState } from 'react';
import Photos from '@/components/Photos';
import 'yet-another-react-lightbox/styles.css';
import { getGalleryPhotos } from '@/lib/api/photos';
import { Image } from '@/lib/models';
import { Skeleton } from '@/components/ui/skeleton';

interface ImageGroup {
  title: string;
  images: Image[];
}

export default () => {
  const [rawFiles, setRawFiles] = useState<Image[]>();
  const [files, setFiles] = useState<ImageGroup[] | null>(null);

  useEffect(() => {
    getGalleryPhotos().then((res) => {
      if (res) {
        setRawFiles(res);
        const groupedFiles = res.reduce(
          (
            acc: {
              [title: string]: Image[];
            },
            file
          ) => {
            const title = file.metadata.customMetadata?.title;
            if (title) {
              if (!acc[title]) {
                acc[title] = [];
              }
              acc[title].push(file);
            }
            return acc;
          },
          {}
        );

        const sortedKeys = Object.keys(groupedFiles).sort((a, b) => {
          if (a === 'Alte tablouri') return 1;
          if (b === 'Alte tablouri') return -1;
          return a.localeCompare(b);
        });

        const newFiles = sortedKeys.map((title) => ({
          title,
          images: groupedFiles[title]
        }));
        setFiles(newFiles);
      }
    });
  }, []);

  if (!files) {
    return (
      <div className='flex min-h-[calc(100dvh-4rem)] flex-col px-8 pt-[5rem]'>
        <h2 className={'main-title py-4'}>Galerie</h2>
        <Skeleton className='h-12 w-1/4 py-4' />
        <div className='mt-4 flex'>
          <div className='max-sm:justify-center flex flex-wrap gap-3 pb-10'>
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
          </div>
        </div>
        <Skeleton className='h-12 w-1/4 py-4' />
        <div className='mt-4 flex'>
          <div className='max-sm:justify-center flex flex-wrap gap-3 pb-10'>
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
            <Skeleton className='relative aspect-square w-[300px] rounded-3xl' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col px-8 pt-[5rem]'>
      <h2 className={'main-title py-4'}>Galerie</h2>
      {files?.map((group, index) => (
        <>
          <h2
            className={'main-title py-4 !text-3xl !not-italic mobile:!text-2xl'}
          >
            {group.title}
          </h2>
          <Photos photos={group.images} key={index} />
        </>
      ))}
    </div>
  );
};

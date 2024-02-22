'use client';

import React, { useEffect, useState } from 'react';
import Photos from '@/components/Photos';
import 'yet-another-react-lightbox/styles.css';
import { getGalleryPhotos } from '@/lib/api/photos';
import { Image } from '@/lib/models';

interface ImageGroup {
  title: string;
  images: Image[];
}

export default () => {
  const [rawFiles, setRawFiles] = useState<Image[]>();
  const [files, setFiles] = useState<ImageGroup[]>();

  useEffect(() => {
    getGalleryPhotos().then((res) => {
      if (res) {
        console.log(res);
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
        console.log(newFiles);
        setFiles(newFiles);
      }
    });
  }, []);

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col pt-[5rem] px-8'>
      <h2 className={'main-title py-4'}>Galerie</h2>
      {files?.map((group) => (
        <>
          <h2
            className={'main-title py-4 !not-italic mobile:!text-2xl !text-3xl'}
          >
            {group.title}
          </h2>
          <Photos photos={group.images} />
        </>
      ))}
    </div>
  );
};

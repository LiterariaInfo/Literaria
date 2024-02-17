'use server'

import { getDownloadURL, getMetadata, getStorage, listAll, ref } from '@firebase/storage';
import { app } from '../../../firebase';

export default async function getGalleryPhotos() {
  const storage = getStorage(app);
  const imagesRef = ref(storage, 'gallery');

  return await listAll(imagesRef)
    .then(async (res) => {
      const promises = res.items.map(async (item) => {
        const metadata = await getMetadata(item);
        const url = await getDownloadURL(item);
        return {
          name: item.name,
          metadata: metadata,
          src: url
        };
      });

      return await Promise.all(promises);
    })
    .catch((error) => {
      console.error('Error listing files', error);
    });
}
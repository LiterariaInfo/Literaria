import { getStorage, ref, uploadBytes } from '@firebase/storage';
import { app } from '../../../firebase';

const handleUploadClick = async ({file, filesLen, title, description}: {file: File; filesLen: number; title: string; description: string}) => {

  if (!file) {
    return;
  }

  const storage = getStorage(app);
  const imagesRef = ref(storage, 'gallery');
  const newImageRef = ref(imagesRef, `${filesLen ? filesLen : 'hello'}.png`);
  const metadata = {
    contentType: 'image/png',
    customMetadata: {
      title: title,
      description: description
    }
  };
  await uploadBytes(newImageRef, file, metadata).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
};

export default handleUploadClick;
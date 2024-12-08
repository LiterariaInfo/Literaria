import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDgN1nyrsXvq_l_F0vF35lgkML8Px_9GgY',
  authDomain: 'literaria-info.firebaseapp.com',
  projectId: 'literaria-info',
  storageBucket: 'literaria-info.appspot.com',
  messagingSenderId: '541888972404',
  appId: '1:541888972404:web:4a4cce30aad74972ba3321',
  measurementId: 'G-41RQK3JR9R'
};

export const app = initializeApp(firebaseConfig);

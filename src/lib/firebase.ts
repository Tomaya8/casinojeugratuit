'use client';

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvB0iuYeByPxN2lWxW5Md86wt_hhtmdJo",
  authDomain: "casinojeugratuit.firebaseapp.com",
  projectId: "casinojeugratuit",
  storageBucket: "casinojeugratuit.firebasestorage.app",
  messagingSenderId: "631866570315",
  appId: "1:631866570315:web:7620c08cef6c0e506f7fce",
};

let app: FirebaseApp;
let db: Firestore;

function getDb(): Firestore {
  if (!db) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  }
  return db;
}

export async function subscribeNewsletter(email: string, source: string): Promise<{ success: boolean; message: string }> {
  const firestore = getDb();
  await addDoc(collection(firestore, 'newsletter_subscribers'), {
    email: email.toLowerCase().trim(),
    source,
    subscribedAt: new Date().toISOString(),
    active: true,
  });
  return { success: true, message: 'Inscription réussie !' };
}

export async function sendContactMessage(name: string, email: string, message: string): Promise<{ success: boolean; message: string }> {
  const firestore = getDb();
  await addDoc(collection(firestore, 'contact_messages'), {
    name: name.trim(),
    email: email.toLowerCase().trim(),
    message: message.trim(),
    sentAt: new Date().toISOString(),
    read: false,
  });
  return { success: true, message: 'Message envoyé avec succès !' };
}

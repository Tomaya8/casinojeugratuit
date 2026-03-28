import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export async function subscribeNewsletter(email: string, source: string): Promise<{ success: boolean; message: string }> {
  const normalizedEmail = email.toLowerCase().trim();
  const ref = collection(db, 'newsletter_subscribers');

  // Check duplicate
  const q = query(ref, where('email', '==', normalizedEmail));
  const existing = await getDocs(q);
  if (!existing.empty) {
    return { success: true, message: 'Vous êtes déjà inscrit(e) !' };
  }

  await addDoc(ref, {
    email: normalizedEmail,
    source,
    subscribedAt: new Date().toISOString(),
    active: true,
  });

  return { success: true, message: 'Inscription réussie !' };
}

export async function sendContactMessage(name: string, email: string, message: string): Promise<{ success: boolean; message: string }> {
  await addDoc(collection(db, 'contact_messages'), {
    name: name.trim(),
    email: email.toLowerCase().trim(),
    message: message.trim(),
    sentAt: new Date().toISOString(),
    read: false,
  });

  return { success: true, message: 'Message envoyé avec succès !' };
}

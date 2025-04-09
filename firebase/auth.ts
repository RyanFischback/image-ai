import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export const signUp = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        username,
        createdAt: new Date().toISOString(),
      });
      return user;
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw new Error('Failed to sign up user');
    }
  };
  
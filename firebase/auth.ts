import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export const signUp = async (
  email: string,
  password: string,
  username: string,
//   displayName: string,
//   avatarUrl: string
) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    username,
    // displayName,
    // avatarUrl,
    createdAt: new Date().toISOString(),
  });

  return user;
};

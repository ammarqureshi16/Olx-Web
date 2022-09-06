import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyCs9XtEdmpnwJPXpnJvjQEdbKq-RmLB47Q",
  authDomain: "expertizo-face.firebaseapp.com",
  projectId: "expertizo-face",
  storageBucket: "expertizo-face.appspot.com",
  messagingSenderId: "296239291521",
  appId: "1:296239291521:web:ae877bc004431ef042c180",
  measurementId: "G-4M6HHS5XTB",
};

// New work start
// const firebaseConfig = {
//   apiKey: "AIzaSyCWqi7v_elC2EM7LD9EPBn4sCCwWZb0caU",
//   authDomain: "expertizo-olx-43c7a.firebaseapp.com",
//   projectId: "expertizo-olx-43c7a",
//   storageBucket: "expertizo-olx-43c7a.appspot.com",
//   messagingSenderId: "8667806874",
//   appId: "1:8667806874:web:36fa082e8a593509563323",
//   measurementId: "G-FLXJ4FLK35",
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Sign Up and Create Collection User
async function signUp(form, file) {
  const { email, password, name, age } = form;
  // console.log("Jharo lagao");
  // console.log("Chai banny rakh dii");
  const result = await createUserWithEmailAndPassword(auth, email, password);
  // console.log("Ris signUp UserID", result.user);
  const imageRef = ref(storage, "profileImage/" + file.name);
  // console.log("Firebase Image Ref------>>>>>",imageRef)
  const imageUpload = await uploadBytes(imageRef, file);
  // console.log("imageUpload---->>>>>>",imageUpload)
  const url = await getDownloadURL(imageUpload.ref);
  // console.log("URL---<<<<<",url)
  const uid = result.user.uid;

  await setDoc(doc(db, "user", uid), {
    email,
    name,
    uid,
    age,
    url,
  });

  await swal({
    title: "Successful Sign Up!",
    text: "",
    icon: "success",
    button: "Ok",
  });
  // console.log("Chai Ban gai");
  // console.log("Bartan Dho lo ab");
  return "kam chala jani";
}

async function login(form) {
  const { name, email, password } = form;
  await signInWithEmailAndPassword(auth, email, password);
  await swal({
    title: "Successfully Log In!",
    text: "",
    icon: "success",
    button: "Ok",
  });
}
// // Login User Get
async function getUserLogin() {
  const userid = auth.currentUser.uid;
  const docRef = doc(db, "user", userid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// Create Adds Collection //Create Add Ki File
async function addUpload(userValue, file) {
  const { title, price, detail } = userValue;
  const uid = auth.currentUser.uid;
  const imageRef = ref(storage, "addImages/" + file.name);
  const imageUpload = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(imageUpload.ref);
  try {
    await addDoc(collection(db, "adds"), {
      title: title,
      price: price,
      detail: detail,
      url: url,
      uid: uid,
    });
    await swal({
      title: "Your data is add Successfully",
      text: "",
      icon: "success",
      button: "Ok",
    });
  } catch (e) {
    await swal({
      title: e.message,
      text: "",
      icon: "warning",
      button: "Ok",
    });
  }
}

// // Get My Adds
async function getMyAdds() {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "adds"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    const adds = { ...doc.data(), uid, id: doc.id };
    data.push(adds);
  });
  return data;
}

// Get Collection Adds
async function getAdds() {
  const q = query(collection(db, "adds"));
  const querySnapshot = await getDocs(q);
  let data = [];
  const uid = auth.currentUser.uid;
  querySnapshot.forEach((doc) => {
    const adds = { ...doc.data(), id: doc.id };
    data.push(adds);
  });
  return data;
}

// // Get Detail Data
async function getAddDetail(id) {
  // const userid = auth.currentUser.uid;
  const docRef = doc(db, "adds", id);
  const docSnap = await getDoc(docRef);
  // console.log("Firebase->>>", data);
  return docSnap.data();
}

// // Get Collection User
// async function getUser() {
//   // const userid = auth.currentUser.uid
//   // console.log("--->>>>>",userid)
//   const userInfo = query(collection(db, "user"));
//   // .doc(getUser.user.uid).get();
//   const querySnapshot = await getDocs(userInfo);
//   let data = [];
//   querySnapshot.forEach((doc) => {
//     data = [...data, doc.data()];
//     // console.log("User Collection Get---->>", doc.data());
//   });
//   return data;
// }

// Upload Profile
async function uploadImage(file) {
  // console.log("file--->>>", file);
  // const uid = auth.currentUser.uid;
  const imageRef = ref(storage, "profile/" + "png");
  const uploadImage = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(uploadImage.ref);
  // console.log(url);
  return url;
}
// // Update Profile
async function updateProfile(data) {
  // console.log("currentuser--->" ,auth.currentUser.uid)
  const uid = auth.currentUser.uid;
  await setDoc(doc(db, "user", uid), data, { merge: true });
}

export {
  signUp,
  login,
  getUserLogin,
  getMyAdds,
  addUpload,
  getAdds,
  getAddDetail,
  updateProfile,
  uploadImage,
};

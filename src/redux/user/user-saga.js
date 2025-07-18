import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user-types";
import { getDoc } from "firebase/firestore";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
} from "./user-actions";
import {
  auth,
  getCurrentUser,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebaseUtil";

export function* getSnapShotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield call(getDoc, userRef); // ✅ FIXED
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpWithEmail({
  payload: { displayName, email, password },
}) {
  console.log(displayName, email, password);
  try {
    const userCredential = yield createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    yield createUserProfileDocument(user, { displayName });
    console.log(user);
    yield call(signInWithEmail, { payload: { email, password } });
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithPopup, auth, googleProvider); // ✅ use call
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  console.log("user");
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignUpWithEmail() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutStart);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpWithEmail)
  ]);
}

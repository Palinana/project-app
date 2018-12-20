export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err });
            });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase(); //to sign a new user up
        const firestore = getFirestore(); //need access to db

        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(resp => {
            //create a record in a firestore for a new user
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });
    }
}
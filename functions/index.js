const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then((doc) => console.log('notification added', doc))
});

exports.projectCreated = functions.firestore  //the trigger
    .document('projects/{projectId}')   //when a new project is created in this collection, run the callback
    .onCreate(doc => {

        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.projectDeleted= functions.firestore  //the trigger
    .document('projects/{projectId}')   //when a new project is created in this collection, run the callback
    .onDelete(doc => {

        const project = doc.data();
        const notification = {
            content: 'Deleted a project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.projectUpdated= functions.firestore  //the trigger
    .document('projects/{projectId}')   //when a new project is created in this collection, run the callback
    .onUpdate(doc => {

        const project = doc.after.data();
        const notification = {
            content: 'Updated a project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                content: 'Joined the application',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
                };

                return createNotification(notification);

            });
});
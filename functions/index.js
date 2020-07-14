const functions = require('firebase-functions');

const admin = require ('firebase-admin');


admin.initializeApp(functions.config().firebase)




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const createNotification = (notification =>{
    return admin.firestore().collection('notifications').add(notification).then(doc => console.log('notification added', doc))
})

exports.postCreated=functions.firestore.document('posts/{postId}').onCreate(doc=>{
    const post = doc.data();
    const notification = {
        content: 'A new post is added',
        user: `${post.authorFirstName} ${post.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
 return createNotification(notification)
})


exports.userJoined = functions.auth.user().onCreate(async user=>{
    return await admin.firestore().collection('users').doc(user.uid).get().then(doc=>{
        const newUser = doc.data()
        const notification = {
            content: 'Joined the Pawty',
            user:  `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })
})
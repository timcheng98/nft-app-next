const { firestore } = require("../util/firebase");

exports.getPosts = async () => {
  // let db = admin.ge
  // console.log(await firestore.collection('posts').get())
  // console.log('db', db)
  // await db.collection('posts').doc('ttitle').set(save_to_database[key][prod])

  const snapshot = await firestore.collection("posts").get();
  let posts = []
  snapshot.docs.forEach((doc) => {
    return posts.push({
      id: doc.id,
      ...doc.data(),
      ctime: doc.createTime.seconds,
      utime: doc.updateTime.seconds,
    })
  });

  return posts;
};

exports.getSinglePost = async (id) => {

  const doc = await firestore.collection("posts").doc(id).get();
  let post = {
    id,
   ...doc.data(),
      ctime: doc.createTime.seconds,
      utime: doc.updateTime.seconds,
  }

  return post;
};

exports.createPost = async (id, dataObj) => {
  const cityRef = firestore.collection('posts').doc(id);
  const res = await cityRef.set(dataObj, { merge: true });
  
  return res;
};





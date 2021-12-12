const { firestore } = require("../util/firebase");
const _ = require('lodash')

export const getPosts = async () => {
  const snapshot = await firestore.collection("posts").where('delete', '==', 'False').get()
  let posts = []
  snapshot.docs.forEach((doc) => {
    return posts.push({
      id: doc.id,
      ...doc.data(),
      ctime: doc.createTime.seconds,
      utime: doc.updateTime.seconds,
    })
  });

  return _.orderBy(posts, 'ctime', 'desc');
};

export const getSinglePost = async (id) => {
  const doc = await firestore.collection("posts").doc(id).get();
  let post = {
    id,
    ...doc.data(),
    ctime: doc.createTime.seconds,
    utime: doc.updateTime.seconds,
  }

  return post;
};

export const createPost = async (id, dataObj) => {
  let ref
  if (_.isEmpty(id)) {
    ref = firestore.collection('posts').doc();
  } else {
    ref = firestore.collection('posts').doc(id);
  }

  const res = await ref.set(dataObj, { merge: true });

  return res;
};

export const getCustomStaticProps = async ({ params }, pathname, revalidate = 60 * 60) => {
  let clientProps = {};
  // console.log(object)

  if (pathname === '/news/index') {
    const posts = await getPosts()
    _.assign(clientProps, { posts });
  }
  if (pathname === '/news/[id]') {
    const post = await getSinglePost(params.id)
    _.assign(clientProps, { post });
  }

  return {
    props: {
      ...clientProps,
    },
    revalidate: 1, // 1 s
  };
};

export async function getPostStaticPaths() {
  const posts = await getPosts()
  const paths = _.map(posts, (item) => {
    return {
      params: { id: _.toString(item.id) }
    }
  })

  return {
    paths,
    fallback: false
  }
}

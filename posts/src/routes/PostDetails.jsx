import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import res from 'express/lib/response';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="author" name="author" required/>
        </p>
        <div className={classes.actions}>
          <Link type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}){
  const url =`http://localhost:8080/posts/${params.id}`;
  const response = await fetch(url);
  const resData = await response.json();
  const result =resData.post
  return result;
}

export async function action({request}){
  const formData = await request.formData();
  const postData= Object.fromEntries(formData);
  await fetch(`http://localhost:8080/posts/${postData.id}` ,{
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('/');
}
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAlgorithm, getUserAlgorithm } from '../actions/algorithmActions';
import { Link } from 'react-router-dom';
import profileimg from '../default_avatar.jpg';
import coverpagedef from '../images/AlgorithmSimplfied.png';
import Loader from './Other_Styles/Loader';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function EditBlog() {
  const dispatch = useDispatch();
  const { loading, algorithm } = useSelector(state => state.algorithmState);
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  function truncateText(text, wordLimit) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  const [algorithm_id, setAlgorithmId] = useState('');

  useEffect(() => {
    dispatch(getUserAlgorithm());
  }, [dispatch]);

  const deletePost = (id) => {
    setOpen(true);
    setAlgorithmId(id);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteAlgorithm(algorithm_id));
    setOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto max-w-3xl py-4">
        {loading ? (
          <Loader />
        ) : (
          algorithm &&
          algorithm.map((algo) => (
            <div className="max-w-sm w-full lg:max-w-full lg:flex mt-10" key={algo._id}>
              <img
                className=" w-full  lg:w-2/5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                src={algo.coverpage || coverpagedef}
                alt="Algorithm Cover"
              />
              <div className="border-r lg:w-3/5 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">{algo.category}</p>
                  <Link to={`/singlealgorithms/${algo._id}`}>
                    <div className="text-gray-900 font-bold text-xl mb-2">{algo.name}</div>
                  </Link>
                  <p className="text-gray-700 text-base">{truncateText(algo.descriptions,15)}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={profileimg} alt="Avatar of Author" />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">{algo.author}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link to={`/editblogs/${algo._id}`}>
                    <button className="updateposts">Edit</button>
                  </Link>
                  <button className="deleteposts" onClick={() => deletePost(algo._id)}>Delete</button>
                  <Modal open={open} onClose={onCloseModal} center>
        <h2 style={{color:'red'}}>Confirm Delete</h2>
        <p>
          The post can be deleted and cannot be revoked
        </p>
        
<button class="deletebuttonstyle" onClick={handleDeleteConfirm}><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
      </Modal>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EditBlog;

import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAlgorithm } from '../actions/algorithmActions';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import profileimg from '../default_avatar.jpg';
import { Link } from 'react-router-dom';
import coverpagedef from '../images/AlgorithmSimplfied.png';
import Loader from './Other_Styles/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function Algorithms() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { algorithm, loading } = useSelector(state => state.algorithmState);
  const [pageNumber, setPageNumber] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getAlgorithm(category, pageNumber));
  }, [dispatch, category, pageNumber]);

  useEffect(() => {
    if (algorithm && algorithm.length > 0) {
      // Filter out duplicates
      const uniqueAlgorithms = algorithm.filter(newItem => !items.some(item => item._id === newItem._id));
      setItems(prevItems => [...prevItems, ...uniqueAlgorithms]);
    }
  }, [algorithm]);

  function truncateText(text, wordLimit) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  const fetchMoreData = () => {
    setPageNumber(pageNumber + 1);
    dispatch(getAlgorithm(category, pageNumber + 1));
  };

  return (
    <div className="container mx-auto max-w-3xl py-4">
      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          hasMore={algorithm && algorithm.length > 0}
          next={fetchMoreData}
          loader={<Loader />}
        >
          {items.map(algo => (
            <div key={algo._id} className="max-w-sm w-full lg:max-w-full lg:flex mt-10">
              <img
                className="h-48 w-full lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                src={algo.coverpage || coverpagedef}
                title="Cover Image"
                alt="Cover"
              />
              <div className="border-r border-b lg:w-3/5 border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">{algo.category}</p>
                  <Link to={`/singlealgorithms/${algo._id}`}>
                    <div className="text-gray-900 font-bold text-xl mb-2">{algo.name}</div>
                  </Link>
                  <p className="text-gray-700 text-base">{truncateText(algo.descriptions, 15)}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={profileimg} alt="Avatar" />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">{algo.author}</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Algorithms;

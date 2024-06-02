import React,{useState} from 'react';
import ReactQuill from 'react-quill'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {toast,Bounce} from 'react-toastify'
import Loader from './Other_Styles/Loader';
import { useParams } from 'react-router-dom';
import { getSingleAlgorithm, updateUserAlgorithm } from '../actions/algorithmActions';
function EditEachBlog()
{
  const[Long_description,set_Long_Description]=useState('')
  const [coverpage,setCoverpage]=useState('');
    const dispatch=useDispatch();
    const {id}=useParams();
    const{SingleAlgorithm,loading}=useSelector((state)=>state.singleAlgorithmState);
    const [userData,setUserData]=useState({
        name: '',
        descriptions:  '',
        category:  '',
        })
    
    useEffect(()=>
    {
        dispatch(getSingleAlgorithm(id));
        
    },[dispatch,id])
    useEffect(() => {
        if (SingleAlgorithm) {
            setUserData({
                name: SingleAlgorithm.name,
                descriptions: SingleAlgorithm.descriptions,
                category: SingleAlgorithm.category,
                
            });
            set_Long_Description(SingleAlgorithm.Long_description);
        }
    }, [SingleAlgorithm]);
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ];  
    
      const modules = {
        toolbar: toolbarOptions
      };
      
      const updatePost=(e)=>
        {
          e.preventDefault();
    const updatePostdata=new FormData();
    updatePostdata.append('coverpage',coverpage);
    updatePostdata.append('name',userData.name)

    updatePostdata.append('descriptions',userData.descriptions);
    updatePostdata.append('Long_description',Long_description)
    updatePostdata.append('category',userData.category);

    dispatch(updateUserAlgorithm(updatePostdata,SingleAlgorithm._id));

        } 
      const postchange=(e)=>
        {
          //setting up the coverpage image
          if(e.target.name==='coverpage')
            {
              const reader=new FileReader();
              reader.onload=()=>
                {
                  if(reader.readyState==2)
                    {
                      console.log(e.target.files[0]);
                      setCoverpage(e.target.files[0]);
                    }
                }
                reader.readAsDataURL(e.target.files[0]);
            }
            // setting up the changes upon other fields after updating the image
            setUserData({...userData, [e.target.name]:e.target.value})


        }
        const contentChange=(Long_description)=>
          {
            set_Long_Description(Long_description)
          }
    return (
        <section className="bg-white container mt-10 py-10">
            {loading?(<Loader/>):(SingleAlgorithm && 
                          <form onSubmit={updatePost}>
            
                          <div className="bg-white container mt-10">
                          <div className="mt-10">
                              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Choose Image for Cover page for the post</label>
                            </div>
                    
                            
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">JPG or GIF</p>
                            </div>
                            <input id="dropzone-file"  name="coverpage"  onChange={postchange} type="file"  />
                        </label>
                    </div> 
                    
                            <div className="mt-10">
                              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Title</label>
                              <input type="text" id="title" name="name" value={userData.name} onChange={postchange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter a title" />
                            </div>
                            <div className="mt-10">
                              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Short Description</label>
                              <textarea id="description" name="descriptions" value={userData.descriptions} onChange={postchange} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter a Short Description"></textarea>
                            </div>
                            <div className="mt-10">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Category</label>
                      <select id="countries"  name="category"  onChange={postchange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>{userData.category}</option>
                        <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Computer Networks">Computer Networks</option>
                        <option value="Operating System">Operating System</option>
                        <option value="DBMS">DBMS</option>
                        <option value="System Design">System Design</option>
                    
                      </select>
                            </div>
                            
                            
                            <ReactQuill modules={modules} theme="snow" className="mt-20"  name="Long_description" value={Long_description} onChange={contentChange}   />
                            <button class="bg-transparent hover:bg-blue-500 mt-10 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Submit
                    </button>
                          </div>
                          
                          </form>
            )}

        </section>
      );
}

export default EditEachBlog
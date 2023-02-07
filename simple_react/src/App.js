import './App.css';
import React from 'react' 
import { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

//import useLocalStorage from './useLocalStorage'
import useDisplayName from './customHooks/useDisplayName'
import Frodo from './components/posts/Frodo'
import SimplePosts from './components/posts/SimplePosts' 
import PostsCustomHook from './components/posts/PostsCustomHook';
import Parent from './components/interceptor/Parent';
//import Shire from './components/context/shireSimple/Shire';
import Shire from './components/context/shireObject/Shire';
import AllPosts from './components/reactQuery/AllPosts';

const queryClient = new QueryClient()

function App() {
  const name = useDisplayName()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <AllPosts />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
    </div>
  );
}

export default App;


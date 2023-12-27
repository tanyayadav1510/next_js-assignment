import React from 'react'
import Products from '../components/Products'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Navbar from '../components/Navbar';

const queryClient = new QueryClient();

export default function products(){
  return (
    <QueryClientProvider client={queryClient}>
    <Navbar/>
    <Products/>
    </QueryClientProvider>
  )
}

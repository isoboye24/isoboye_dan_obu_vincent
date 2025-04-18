import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Category',
};

const CreateCategory = () => {
  return (
    <div className="">
      <h2 className="h2-bold">Create Category</h2>
      <div className="my-8 flex justify-center items-center">
        <div className="w-[70vw]">Create Category</div>
      </div>
    </div>
  );
};

export default CreateCategory;

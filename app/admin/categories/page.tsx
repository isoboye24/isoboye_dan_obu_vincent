import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { getAllCategory } from '@/lib/actions/category.actions';

export const metadata: Metadata = {
  title: 'List of Categories',
};

const Categories = async () => {
  const categories = await getAllCategory();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Categories</h1>
        </div>
        <a href="/admin/categories/create" className="">
          <Button variant="default">Create Category</Button>
        </a>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.data?.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell className="flex gap-5">
                  <a href={`/admin/categories/${category.id}`}>
                    <Button>Edit</Button>
                  </a>
                  <a href={`/admin/categories/${category.id}`}>
                    <Button className="bg-red-800 text-gray-200 hover:bg-red-700">
                      Delete
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Categories;

'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { upsertCategorySchema } from '@/lib/validator';
import { ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upsertCategory } from '@/lib/actions/category.actions'; // Unified function
import { useSearchParams } from 'next/navigation';

const CategoryForm = ({ type }: { type: 'Create' | 'Update' }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Expect the category ID in search param (for update)

  const form = useForm<z.infer<typeof upsertCategorySchema>>({
    resolver: zodResolver(upsertCategorySchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof upsertCategorySchema>> = async (
    values
  ) => {
    if (type === 'Update') {
      const categoryId = searchParams.get('id');
      const payload = { ...values, id: parseInt(`${categoryId}`) };
      const res = await upsertCategory(payload);
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push('/admin/categories');
      }
    } else {
      const payload = { ...values };
      const res = await upsertCategory(payload);
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push('/admin/categories');
      }
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={(field: {
                  field: ControllerRenderProps<
                    z.infer<typeof upsertCategorySchema>,
                    'name'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Category name"
                        {...field.field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="button col-span-2 w-full"
              >
                {form.formState.isSubmitting
                  ? 'Submitting...'
                  : `${type} Category`}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CategoryForm;

// 'use client';

// import React from 'react';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { z } from 'zod';
// import { inser } from '@/lib/validator';
// import { ControllerRenderProps, useForm } from 'react-hook-form';
// import { Button } from '../../components/ui/button';
// import { Input } from '../../components/ui/input';
// import { zodResolver } from '@hookform/resolvers/zod';

// const CategoryForm = ({ type }: { type: 'Create' | 'Update' }) => {
//   const form = useForm<z.infer<typeof insertProjectSchema>>({
//     resolver: zodResolver(insertProjectSchema),
//   });

//   return (
//     <div>
//       <Form {...form}>
//         <form
//           method="post"
//           //   onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-8"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="">
//               {/* Project name */}
//               <FormField
//                 control={form.control}
//                 name="title"
//                 render={({
//                   field,
//                 }: {
//                   field: ControllerRenderProps<
//                     z.infer<typeof insertProjectSchema>,
//                     'title'
//                   >;
//                 }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Title</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter Project Title" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
//               <Button
//                 type="submit"
//                 size="lg"
//                 disabled={form.formState.isSubmitting}
//                 className="button col-span-2 w-full"
//               >
//                 {form.formState.isSubmitting ? 'Submitting' : `${type} Project`}
//               </Button>
//             </div>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default CategoryForm;

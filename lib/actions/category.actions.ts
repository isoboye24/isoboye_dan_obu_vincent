'use server';

import { prisma } from '@/lib/prisma';
import { insertCategorySchema, updateCategorySchema } from '@/lib/validator';
import { z } from 'zod';

export const createCategory = async (
  data: z.infer<typeof insertCategorySchema>
) => {
  const parsed = insertCategorySchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid category data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const category = await prisma.category.create({
      data: {
        name: parsed.data.name,
      },
    });

    return {
      success: true,
      message: 'Category created successfully',
      data: category,
    };
  } catch (error) {
    console.error('Create category error:', error);
    return {
      success: false,
      message: 'Failed to create category',
    };
  }
};

export const updateCategory = async (
  data: z.infer<typeof updateCategorySchema>
) => {
  const parsed = updateCategorySchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid category data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const updated = await prisma.category.update({
      where: { id: parsed.data.id },
      data: {
        name: parsed.data.name,
      },
    });

    return {
      success: true,
      message: 'Category updated successfully',
      data: updated,
    };
  } catch (error) {
    console.error('Update category error:', error);
    return {
      success: false,
      message: 'Failed to update category',
    };
  }
};

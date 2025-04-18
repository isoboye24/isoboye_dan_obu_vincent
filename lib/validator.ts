import { z } from 'zod';

export const insertProjectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  siteLink: z
    .string()
    .min(3, 'If provided, site link must be at least 3 characters long')
    .optional(),
  codeLink: z
    .string()
    .min(3, 'If provided, code link must be at least 3 characters long')
    .optional(),
  projectThumbnail: z.string().min(3, 'Project thumbnail link is required'),
  image: z
    .string()
    .min(3, 'If provided, thumbnail must be at least 3 characters long')
    .optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Date must be a valid date (e.g. YYYY-MM-DD)',
  }),
  categoryId: z.string().min(3, 'Project category link is required'),
  description: z
    .string()
    .min(3, 'If provided, description must be at least 3 characters long')
    .optional(),
});

export const updateProjectSchema = insertProjectSchema.extend({
  id: z.number().int().min(1, 'Id is required'),
});

export const insertSkillSchema = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1, 'Skill name is required'),
});

export const updateSkillSchema = insertSkillSchema.extend({
  id: z.number().int().min(1, 'Id is required'),
  categoryId: z.string().min(3, 'Project category link is required'),
});

export const insertCategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  projects: z.array(insertProjectSchema).optional(),
  skills: z.array(insertSkillSchema).optional(),
});

export const updateCategorySchema = insertCategorySchema.extend({
  id: z.number().int().min(1, 'Id is required'),
  projects: z.array(updateProjectSchema).optional(),
  skills: z.array(updateSkillSchema).optional(),
});

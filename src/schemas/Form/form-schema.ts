import {z , ZodType} from 'zod';


export type FormDataTypes = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

export const formSchema: ZodType<FormDataTypes> = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().email(),
  age: z.number().min(18).max(100),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8).max(20)
}).refine((data) => data.password === data.confirmPassword,{
  message: "Passwords do not match",
  path: ["confirmPassword"]
} );
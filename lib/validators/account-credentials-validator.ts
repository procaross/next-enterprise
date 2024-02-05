import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email({ message: "无效的电子邮箱" }),
  password: z.string().min(8, {
    message: "密码必须超过8个字符",
  }),
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

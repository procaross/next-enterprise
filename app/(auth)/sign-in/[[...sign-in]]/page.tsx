"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
// import { Icons } from "@/components/Icons/Icons"
import {
  Button,
  buttonVariants,
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator"

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const onSubmit = ({
    email,
    password,
  }: TAuthCredentialsValidator) => {
    // signIn({ email, password })
  }

  return (
    <>
      <div className="container relative flex flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image
              src="/images/auth-logo.png"
              alt="CryptoInsight Pro LOGO"
              width={253}
              height={120}
            />
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-up"
            >
              还没有账号？注册
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-3 py-2">
                  <Label htmlFor="email">电子邮箱</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors.email,
                    })}
                    placeholder="you@example.com"
                    autoComplete="on"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-3 py-2">
                  <Label htmlFor="password">密码</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors.password,
                    })}
                    placeholder="Password"
                    autoComplete="on"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button variant="outline" className="mt-5">
                  {
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  }
                  登录
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

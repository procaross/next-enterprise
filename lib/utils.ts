import { type ClassValue, clsx } from "clsx"
import Cryptr from "cryptr"
import { twMerge } from "tailwind-merge"

const cryptr = new Cryptr("?@Du^X+qE9:Gz6y=rxu5m#1EonC#!=16")

export function encrypt(text: string): string {
  return cryptr.encrypt(text)
}

export function decrypt(encryptedText: string): string {
  return cryptr.decrypt(encryptedText)
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

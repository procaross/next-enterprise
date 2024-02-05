import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    IPINFO_API_KEY: z.string(),
    DEV_LOCATION: z.string(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    IPINFO_API_KEY: process.env.IPINFO_API_KEY,
    DEV_LOCATION: process.env.DEV_LOCATION,
  },
})

'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

type TansProps = {
  children: React.ReactNode
}

export const TanstackProvider = ({ children }: TansProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* DevTools for TQ */}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="top"
        buttonPosition="top-right"
      />
    </QueryClientProvider>
  )
}

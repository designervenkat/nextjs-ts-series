'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

function Switcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const localActive = useLocale()

  const onSelectChange = (e: any) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  return (
    <label className="border border-slate-900">
      <p className="sr-only">Change Language</p>

      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}>
        <option value="en">English</option>
        <option value="fr">Franch</option>
      </select>
    </label>
  )
}

export default Switcher

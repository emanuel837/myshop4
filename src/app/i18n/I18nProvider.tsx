import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type AppLanguage = 'he' | 'en' | 'ru'

type I18nContextValue = {
  lang: AppLanguage
  dir: 'rtl' | 'ltr'
  setLang: (lang: AppLanguage) => void
  t: (key: TranslationKey) => string
}

type TranslationKey =
  | 'action.orderItem'
  | 'action.sendLab'
  | 'action.receivedPackage'
  | 'tab.report'
  | 'tab.tracking'
  | 'tab.info'
  | 'tab.branches'
  | 'tab.home'
  | 'search.placeholder'

const LS_LANGUAGE = 'myshop4.language'

const translations: Record<AppLanguage, Record<TranslationKey, string>> = {
  he: {
    'action.orderItem': 'הזמנת פריט',
    'action.sendLab': 'שליחה למעבדה',
    'action.receivedPackage': 'קיבלתי חבילה מכץ',
    'tab.report': 'דיווח',
    'tab.tracking': 'מעקב',
    'tab.info': 'מידע',
    'tab.branches': 'סניפים',
    'tab.home': 'בית',
    'search.placeholder': 'חפש פעולה...',
  },
  en: {
    'action.orderItem': 'Order Item',
    'action.sendLab': 'Send to Lab',
    'action.receivedPackage': 'Received Package',
    'tab.report': 'Report',
    'tab.tracking': 'Tracking',
    'tab.info': 'Info',
    'tab.branches': 'Branches',
    'tab.home': 'Home',
    'search.placeholder': 'Search action...',
  },
  ru: {
    'action.orderItem': 'Заказ товара',
    'action.sendLab': 'Отправка в мастерскую',
    'action.receivedPackage': 'Получена посылка',
    'tab.report': 'Отчёт',
    'tab.tracking': 'Отслеживание',
    'tab.info': 'Информация',
    'tab.branches': 'Филиалы',
    'tab.home': 'Домой',
    'search.placeholder': 'Поиск действия...',
  },
}

function getDir(lang: AppLanguage): 'rtl' | 'ltr' {
  switch (lang) {
    case 'en':
      return 'ltr'
    case 'he':
    case 'ru':
      return 'rtl'
  }
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<AppLanguage>(() => {
    try {
      const raw = localStorage.getItem(LS_LANGUAGE)
      return raw === 'en' || raw === 'ru' || raw === 'he' ? raw : 'he'
    } catch {
      return 'he'
    }
  })

  const dir = useMemo(() => getDir(lang), [lang])

  const setLang = (next: AppLanguage) => {
    setLangState(next)
    try {
      localStorage.setItem(LS_LANGUAGE, next)
    } catch {
      // ignore
    }
  }

  const t = (key: TranslationKey) => translations[lang][key] ?? translations.he[key]

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [dir, lang])

  const value = useMemo<I18nContextValue>(
    () => ({ lang, dir, setLang, t }),
    [dir, lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


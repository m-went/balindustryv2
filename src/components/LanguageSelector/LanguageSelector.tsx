'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import styles from './LanguageSelector.module.scss'
import { Link, usePathname } from '@/navigation'

const SupportedLocales = ['pl', 'en', 'de', 'fr'] as const

type Locale = (typeof SupportedLocales)[number]

interface LangWithFlagProps {
  locale: Locale | undefined
}

const generateLanguageName = (locale: Locale | undefined): string => {
  switch (locale) {
    case 'pl': {
      return 'Polski'
    }

    case 'en': {
      return 'English'
    }

    case 'de': {
      return 'Deutsch'
    }

    case 'fr': {
      return 'Français'
    }

    default: {
      return ''
    }
  }
}

const LinkWithFlag: React.FC<LangWithFlagProps & { pathname: string }> = ({
  locale,
  pathname,
}) => (
  <Link href={pathname} locale={locale}>
    <Image
      src={`https://hatscripts.github.io/circle-flags/flags/${locale === 'en' ? 'gb' : locale}.svg`}
      alt={'flaga'}
      height={25}
      width={25}
    />
    {generateLanguageName(locale)}
  </Link>
)

const GenerateLanguageSelectorTrigger: React.FC<LangWithFlagProps> = ({
  locale,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={languageRef}
      className={styles.languageSelector}
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <Image
        src={`https://hatscripts.github.io/circle-flags/flags/${locale === 'en' ? 'gb' : locale}.svg`}
        className={styles.flag}
        alt={'flaga'}
        height={25}
        width={25}
      />
      {generateLanguageName(locale)}
      {isOpen && (
        <div>
          {SupportedLocales.map((supportedLocale) => (
            <LinkWithFlag
              key={supportedLocale}
              locale={supportedLocale}
              pathname={pathname}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const LanguageSelector: React.FC = () => {
  const locale = useLocale() as Locale | undefined

  return <GenerateLanguageSelectorTrigger locale={locale} />
}

'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Link, usePathname } from '@/navigation'

interface LangWithFlagProps {
  locale: 'en' | 'pl' | 'de' | 'fr' | undefined
}

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement>(null)
  const locale = useLocale() as 'en' | 'pl' | 'de' | 'fr' | undefined
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

  const generateLanguageName = (
    locale: 'en' | 'pl' | 'de' | 'fr' | undefined
  ) => {
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

  const GenerateLanguageSelectorTrigger: React.FC<{
    locale: 'en' | 'pl' | 'de' | 'fr' | undefined
  }> = ({ locale }) => (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <Image
          src={`https://hatscripts.github.io/circle-flags/flags/${
            locale === 'en' ? 'gb' : locale
          }.svg`}
          alt={'flaga'}
          height={25}
          width={25}
        />
        {generateLanguageName(locale)}
      </div>
    </>
  )

  const LinkWithFlag: React.FC<LangWithFlagProps> = ({ locale }) => (
    <Link href={pathname} locale={locale}>
      <Image
        src={`https://hatscripts.github.io/circle-flags/flags/${
          locale === 'en' ? 'gb' : locale
        }.svg`}
        alt={'flaga'}
        height={25}
        width={25}
      />
      {generateLanguageName(locale)}
    </Link>
  )

  return (
    <div ref={languageRef} className="language-selector">
      <GenerateLanguageSelectorTrigger locale={locale} />
      {isOpen && (
        <div className="language-options">
          <LinkWithFlag locale="pl" />
          <LinkWithFlag locale="en" />
          <LinkWithFlag locale="de" />
          <LinkWithFlag locale="fr" />
        </div>
      )}
    </div>
  )
}

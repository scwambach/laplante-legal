'use client'
// import { useState } from 'react'
import { GlobalProps } from '@utils/types'
import { Box, Container, Flex, Heading } from '@components/utility'
import {
  ImageObject,
  // Button, Dropdown,
  LinkObject,
} from '@components/modules'

// deploy

export const Header = ({
  // menu,
  logo,
  title,
  phone,
}: {
  logo: GlobalProps['logo']
  menu: GlobalProps['navigation']
  title: GlobalProps['siteTitle']
  phone: GlobalProps['phone']
}) => {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Box elementTag="header" className="header">
      <Container containerClass="narrow">
        <Flex
          ariaLabel="Main Navigation"
          columnBreak="sm"
          role="navigation"
          gap="none"
          elementTag="nav"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading level={1} nonHeadingElement="p">
            <LinkObject href="/" ariaLabel={title} className="logo">
              {logo ? <ImageObject {...logo} alt={title} /> : title}
            </LinkObject>
          </Heading>
          <Box className="contact">
            <Flex
              elementTag="p"
              gap="xxs"
              alignItems="center"
              columnBreak="none"
            >
              <em>contact:</em>
              <LinkObject href={`tel:${phone}`}>{phone}</LinkObject>
            </Flex>
          </Box>

          {/* <Flex
            elementTag="ul"
            alignItems="center"
            className={`unstyled mainNav${menuOpen ? ' open' : ''} `}
          >
            {menu?.map((item) => (
              <li key={item.href}>
                {item.subNav ? (
                  <Dropdown
                    unstyled
                    href={item.href}
                    label={item.label}
                    items={item.subNav}
                  />
                ) : item.href ? (
                  <Button unstyled type={item.type} href={item.href}>
                    {item.label}
                  </Button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </Flex>
          <Button
            unstyled
            type="button"
            className={`navToggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
            <Box className="srOnly">
              <span>Toggle Menu</span>
            </Box>
          </Button>
          */}
        </Flex>
      </Container>
    </Box>
  )
}

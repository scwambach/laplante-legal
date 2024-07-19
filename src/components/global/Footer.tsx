'use client'

import { LinkObject } from '@components/modules'
import { Box, Container, Flex } from '@components/utility'
import { GlobalProps } from '@utils/types'

export const Footer = ({ location, phone, fax }: GlobalProps) => {
  const address = location
    ? `${location.street}, ${location.city}, ${location.state} ${location.zip}`
    : ''
  return (
    <Box elementTag="footer" className="footer">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex elementTag="p" gap="micro">
            <strong>Location:</strong>
            <LinkObject href={`https://www.google.com/maps/search/${address}`}>
              {address}
            </LinkObject>
          </Flex>
          <Flex gap="micro" direction="column">
            <Flex elementTag="p" gap="micro">
              <strong>Phone:</strong>
              <LinkObject href={`tel:${phone}`}>{phone}</LinkObject>
            </Flex>
            <Flex elementTag="p" gap="micro">
              <strong>Fax:</strong>
              <LinkObject href={`tel:${fax}`}>{fax}</LinkObject>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

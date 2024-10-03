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
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fill
          className="inner"
        >
          <p>
            <strong>Location: </strong>
            <LinkObject href={`https://www.google.com/maps/search/${address}`}>
              {address}
            </LinkObject>
          </p>
          <div>
            <p>
              <strong>Phone: </strong>
              <LinkObject href={`tel:${phone}`}>{phone}</LinkObject>
            </p>
            {fax && (
              <p>
                <strong>Fax: </strong>
                <LinkObject href={`tel:${fax}`}>{fax}</LinkObject>
              </p>
            )}
          </div>
        </Flex>
      </Container>
    </Box>
  )
}

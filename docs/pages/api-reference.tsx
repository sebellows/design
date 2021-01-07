import {Box, Card, Code, Heading, Stack} from '@sanity/ui'
import React from 'react'
import uiApi from '../temp/api/ui.api.json'

export default function APIReferencePage() {
  return (
    <Box padding={4}>
      <Stack space={4}>
        {uiApi.members[0].members.map((member) => {
          return (
            <Card key={member.name} padding={3} shadow={1}>
              <Stack space={2}>
                {/* <Heading size={1}>
                  <code>{member.name}</code>
                </Heading> */}

                {/* <Inline space={1}>
                  {member.releaseTag === 'Internal' && <Badge tone="critical">internal</Badge>}
                  {member.releaseTag === 'Alpha' && <Badge tone="caution">alpha</Badge>}
                  {member.releaseTag === 'Beta' && <Badge tone="caution">beta</Badge>}
                  {member.releaseTag === 'Public' && <Badge tone="positive">public</Badge>}
                </Inline> */}

                {member.kind === 'Interface' && (
                  <Stack space={3}>
                    <Code language="typescript">{`interface ${member.name} {`}</Code>
                    {member.members?.map((member: any) => (
                      <Code key={member.name} language="typescript">
                        {'  ' +
                          member.excerptTokens
                            .map((t: any) => t.text.replace('    ', '  '))
                            .join('')}
                      </Code>
                    ))}
                    <Code>{`}`}</Code>
                  </Stack>
                )}

                {member.kind !== 'Interface' && (
                  <Code>
                    {member.name} ({member.kind})
                  </Code>
                )}
              </Stack>
            </Card>
          )
        })}
      </Stack>
    </Box>
  )
}

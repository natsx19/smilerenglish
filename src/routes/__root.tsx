import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Smiler English – Insegnante di Inglese',
      },
      {
        name: 'description',
        content: 'Lezioni di inglese personalizzate per tutti i livelli. Insegnante madrelingua qualificata.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

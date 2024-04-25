import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const DevelopmentServer = () => {
    return (
        <>
            <p>
            </p>
            <SyntaxHighlighter>npm run start</SyntaxHighlighter>
            <p>
                Visit{' '}
                <a
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noreferrer"
                >
                    http://localhost:3000/
                </a>{' '}
                on your browser, the app will automatically reload if you change
                any of the source files.
            </p>
        </>
    )
}

export default DevelopmentServer

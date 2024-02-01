import NextLink from 'next/link'
import LinkEstilizado from './stile_link';


export default function Link({href, children, ...props}){
    return (
        <NextLink href={href} legacyBehavior>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    );
}
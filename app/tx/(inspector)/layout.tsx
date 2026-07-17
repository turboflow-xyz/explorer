import '@/app/styles.css';

import { Metadata } from 'next/types';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode;
    params: Readonly<{
        signature: string;
    }>;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    if (signature) {
        return {
            description: `Interactively inspect the Solana transaction with signature ${signature}`,
            title: `Transaction Inspector | ${signature} | Turboflow`,
        };
    } else {
        return {
            description: `Interactively inspect Solana transactions`,
            title: `Transaction Inspector | Turboflow`,
        };
    }
}

export default function TransactionInspectorLayout({ children }: Props) {
    return children;
}

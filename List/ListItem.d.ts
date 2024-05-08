import React from 'react';
export interface ListItemProps {
    children?: React.ReactNode;
    className?: string;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
}
export declare const ListItem: React.FC<ListItemProps>;

import { cn } from '@/lib/utils';
import React from 'react';

export default function MaxWidthWrapper({
	className,
	children,
}: IMaxWidthWrapper) {
	return <div className={cn('container', className)}>{children}</div>;
}

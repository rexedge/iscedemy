import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import React from 'react';

export default function CoursePage({ params }: { params: { course: string } }) {
	return (
		<div>
			<MaxWidthWrapper>
				Course title is {params.course}
			</MaxWidthWrapper>
		</div>
	);
}

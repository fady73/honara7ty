import type { Metadata } from 'next';
import DevotionGroupInviteClient from './DevotionGroupInviteClient';

export const metadata: Metadata = {
  title: 'دعوة لمجموعة الخلوة',
  description:
    'اتدعيت ل مجموعة خلوة على تطبيق هنا راحتى Honara7ty. افتح التطبيق للانضمام.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default async function DevotionGroupInvitePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code = '' } = await searchParams;

  return <DevotionGroupInviteClient code={code} />;
}

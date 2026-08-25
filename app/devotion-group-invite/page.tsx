import DevotionGroupInviteClient from './DevotionGroupInviteClient';

export const metadata = {
  title: 'دعوة لمجموعة الخلوة',
  description:
    'اتدعيت ل مجموعة خلوة على تطبيق هنا راحتى Honara7ty. افتح التطبيق للانضمام.',
};

export default async function DevotionGroupInvitePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code = '' } = await searchParams;

  return <DevotionGroupInviteClient code={code} />;
}

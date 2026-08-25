'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png';
import googlePlayBadge from '@/public/google-play-badge.svg';
import appStoreBadge from '@/public/app-store-badge.svg';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.honara7ty.app';
const APP_STORE_URL = 'https://apps.apple.com/eg/app/id6799511461';

export default function DevotionGroupInviteClient({ code }: { code: string }) {
  const cleanCode = code.replace(/\s+/g, '');
  const appLink = `honara7ty://devotion-group-invite?code=${encodeURIComponent(cleanCode)}`;

  useEffect(() => {
    if (!cleanCode) return;

    window.location.href = appLink;
  }, [appLink, cleanCode]);

  return (
    <main className="invite">
      <section className="invite-card anim-up">
        <Image
          className="invite-logo"
          src={logo}
          alt="شعار هنا راحتى"
          width={76}
          height={76}
          priority
        />

        <h1>دعوة لمجموعة الخلوة</h1>

        <p className="invite-sub">
          اتدعيت تنضم لمجموعة خلوة على «هنا راحتى». افتح التطبيق لتشوف الدعوة
          وتقرر الانضمام أو لا.
        </p>

        {cleanCode ? <div className="invite-code">{cleanCode}</div> : null}

        <a className="btn btn-primary invite-btn" href={appLink}>
          فتح التطبيق
        </a>

        {cleanCode ? (
          <p className="invite-status">جارٍ فتح التطبيق تلقائيًا…</p>
        ) : null}

        <div className="invite-stores">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={googlePlayBadge}
              alt="حمّل هنا راحتى من Google Play"
              width={162}
              height={48}
            />
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={appStoreBadge}
              alt="حمّل هنا راحتى من App Store"
              width={162}
              height={48}
            />
          </a>
        </div>

        <p className="invite-hint">
          لو التطبيق ما فتحش تلقائيًا، اضغط على زر «فتح التطبيق» للمحاولة مرة
          تانية، أو اختَر المتجر المناسب لتحميله.
        </p>
      </section>
    </main>
  );
}

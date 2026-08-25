'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.honara7ty.app';
const APP_STORE_URL = 'https://apps.apple.com/eg/app/id6799511461';

function isIosDevice(ua: string) {
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && 'ontouchend' in document)
  );
}

export default function DevotionGroupInviteClient({ code }: { code: string }) {
  const cleanCode = code.replace(/\s+/g, '');
  const appLink = `honara7ty://devotion-group-invite?code=${encodeURIComponent(cleanCode)}`;

  useEffect(() => {
    if (!cleanCode) return;

    const ua = window.navigator.userAgent;
    const isAndroid = /Android/i.test(ua);
    const isIOS = isIosDevice(ua);
    let didLeavePage = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        didLeavePage = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.location.href = appLink;

    const fallbackTimer = window.setTimeout(() => {
      if (!didLeavePage && isAndroid) {
        window.location.href = PLAY_STORE_URL;
      } else if (!didLeavePage && isIOS) {
        window.location.href = APP_STORE_URL;
      }
    }, 1600);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.clearTimeout(fallbackTimer);
    };
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
            Google Play
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            App Store
          </a>
        </div>

        <p className="invite-hint">
          لو التطبيق مش متسطّب على جهازك، هيتم تحويلك تلقائيًا للمتجر المناسب
          (Google Play أو App Store) خلال لحظات.
        </p>
      </section>
    </main>
  );
}

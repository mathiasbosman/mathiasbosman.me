import { Outlet, ScrollRestoration, useMatches } from 'react-router-dom';
import { useEffect } from 'react';
import Page from '@components/common/page.tsx';

interface PageHandle {
  title?: string;
  renderAvatar?: boolean;
}

export default function AppLayout() {
  const matches = useMatches();
  const active = matches[matches.length - 1];
  const handle = (active?.handle ?? {}) as PageHandle;

  const title = handle.title ? `${handle.title} - Mathias Bosman` : 'Mathias Bosman - Software developer';
  const renderAvatar = !!handle.renderAvatar;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Page renderAvatar={renderAvatar}>
      {/* Only this outlet swaps content; the shell stays mounted */}
      <Outlet />
      {/* Smooth scroll behavior between pages */}
      <ScrollRestoration />
    </Page>
  );
}

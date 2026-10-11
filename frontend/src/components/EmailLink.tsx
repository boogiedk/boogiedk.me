import React, { useState } from 'react';
import { EmailAddress } from '../types/resume';

// The mailto: address is put together only once a visitor reaches for the link,
// so harvesters that just read the markup or the bundle never see it.
export function EmailLink({ user, domain }: EmailAddress) {
  const [href, setHref] = useState<string>();

  const buildHref = () => `mailto:${user}@${domain}`;
  const reveal = () => setHref(buildHref());

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault();
      window.location.href = buildHref();
    }
  };

  return (
    <a href={href ?? '#email'} onPointerEnter={reveal} onTouchStart={reveal} onFocus={reveal} onClick={handleClick}>
      Email
    </a>
  );
}

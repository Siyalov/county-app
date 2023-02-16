// do not forget also set PUBLIC_URL in .env
export const path =
  process.env.REACT_APP_PUBLIC_ROOT || window.location.href.includes("github.")
    ? "/county-app/"
    : "/";

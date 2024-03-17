import { useHistory, useLocation } from '@docusaurus/router'
import React, { useEffect } from 'react'


const Location = () => {
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');

  return { url, prevUrl };

}


const NavToContribute = () => {

  const location = useLocation();
  let from = location.state?.from?.pathname;

  useEffect(() => {
    if (document?.referrer === "" && window) {
      window.location.href = "https://github.com/matro-ui/matro-ui/blob/main/CONTRIBUTING.md"
    }
  }, [])

  return ""
}

export default NavToContribute
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
  const { url, prevUrl } = Location()

  const location = useLocation();
  let from = location.state?.from?.pathname;

  console.log(url, prevUrl, from);
  useEffect(() => {
    if (document?.referrer === "") {
      window.location.href = "https://github.com/matro-ui/matro-ui/blob/main/CONTRIBUTING.md"
    }
  }, [])

  return ""
}

export default NavToContribute
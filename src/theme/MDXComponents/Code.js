import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import CodeInline from '@theme/CodeInline';
import * as provider from "matro-ui";
import { IoBluetoothOutline, IoLayersOutline, IoSearch, IoMailUnreadOutline } from "react-icons/io5";
function shouldBeInline(props) {
  return (
    // empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' &&
    React.Children.toArray(props.children).every(
      (el) => typeof el === 'string' && !el.includes('\n'),
    )
  );
}

export default function MDXCode(props) {
  return shouldBeInline(props) ? (
    <CodeInline {...props} />
  ) : (
    <CodeBlock {...props} scope={{ ...provider, IoBluetoothOutline, IoLayersOutline, IoSearch, IoMailUnreadOutline }} />
  );
}

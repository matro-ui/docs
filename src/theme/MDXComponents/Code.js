import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import CodeInline from '@theme/CodeInline';
import * as provider from "matro-ui";
import * as io5 from "react-icons/io5";
import * as pi from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Link from '@docusaurus/Link';
import I from "../../../assets/components/I"
import { v4 as uuid } from "uuid";
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
    <CodeBlock {...props} scope={{ ...provider, ...io5, ...pi, IoIosArrowForward, Link, I, uuid }} />
  );
}

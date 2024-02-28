/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';
import styles from "../../css/codeblock.module.css"
import clsx from 'clsx';

const withLiveEditor = (Component) => {
  function WrappedComponent(props) {
    if (props.live) {
      return <Playground scope={ReactLiveScope} {...{ ...props, className: clsx(props.className, styles.playground) }} />;
    }

    return <Component {...props} />;
  }

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);

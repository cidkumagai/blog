import { useState } from 'react';
import { marked } from 'marked';

import styles from '../../styles/Marked.module.css';

export { Marked as default };

const DEFAULT_TEXT = [
  '# h1',
  '## h2',
  '### h3',
  '#### h4',
  '##### h5',
  '###### h6',
  '_italic type_',
  '**太字**',
  '`single code`',
  '``` \nmulti\ncode\n ```',
  '~~strikethrough~~',
  '<details><summary>サンプルコード</summary>\n\n```\nputs Hello, World\n```\n</details>\n',
  '- list1',
  '- lsit1',
  '1. list1',
  '1. list2',
  '<strong>strong</strong>',
  '- [ ] uncheked',
  '- [x] cheked',
  '[Link](http://qiita.com "Qiita Home")',
];

const Marked = () => {
  const [text, setText] = useState(DEFAULT_TEXT.join('\n'));

  const options = {
    gfm: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const renderMarkdown = (text: string) => {
    const __html = marked(text, options);
    return { __html };
  };

  return (
    <div className={styles.marked}>
      <textarea onChange={handleInput} value={text} style={{ width: '500px', height: '500px' }} />
      <div
        dangerouslySetInnerHTML={renderMarkdown(text)}
        style={{ width: '500px', height: '500px', border: '1px solid #ffffff', padding:'20px', overflowY:'scroll' }}
      />
    </div>
  );
};

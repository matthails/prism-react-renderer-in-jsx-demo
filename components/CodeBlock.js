import React from "react";
  import Highlight, { defaultProps } from "prism-react-renderer";
  import theme from "prism-react-renderer/themes/nightOwl";
  import { ClipboardIcon} from '@heroicons/react/outline';
  import copy from 'copy-to-clipboard';
   

   
  export default function CodeBlock({code, title}) {
    const [isCopied, setIsCopied] = React.useState(false);
    
       return (
  <Highlight {...defaultProps} theme={theme} title={title} code={code} language="jsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
     
        <pre className="text-left mx-[1em] my-0 p-[0.5em] overflow-x-hidden rounded-md text-sm pb-4" style={style}>
           <div className="flex justify-between items-center mb-2">
            <span></span>
              <span>{title}</span>
              {isCopied ? ' Copied!' :  <ClipboardIcon className="cursor-pointer w-8 p-2 text-white"
                onClick={() => {
            copy(code)
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
             / >}
             
            </div>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} className="table-row">
              <span className="table-cell text-right pr-[1em] select-none opacity-[0.5]">{i + 1}</span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
       )
  }
  

  
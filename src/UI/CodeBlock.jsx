import { Highlight, themes } from "prism-react-renderer";

function CodeBlock({ code, pLang }) {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={pLang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="bg-slate-900 rounded-md w-full overflow-auto">
          <pre
            className="p-2"
            style={{
              whiteSpace: "pre-wrap", // Allow wrapping of long lines
              wordBreak: "break-word", // Break long tokens if necessary
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}

export default CodeBlock;

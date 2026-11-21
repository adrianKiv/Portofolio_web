import {
  Cursor,
  CursorContainer,
  CursorFollow,
  CursorProvider,
} from "@animate-ui/react/primitives/cursor";

export default function PortfolioCursor() {
  return (
    <CursorProvider global>
      <CursorContainer className="portfolio-cursor-layer">
        <Cursor>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 3L19 11L12 13L9 20L4 3Z"
              fill="#93c5fd"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </Cursor>
        <CursorFollow
          side="right"
          align="end"
          sideOffset={14}
          alignOffset={-4}
        >
          <span className="portfolio-cursor-label">Dev</span>
        </CursorFollow>
      </CursorContainer>
    </CursorProvider>
  );
}
